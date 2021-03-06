﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.ServiceProcess;
using MyDailyLogs.Core.Configuration;
using MyDailyLogs.Core.Interfaces;
using MyDailyLogs.Core.Utilities;
using MyDailyLogs.DataAccess;
using MyDailyLogs.Services.Interfaces;
using MyDailyLogs.ViewModels;

namespace MyDailyLogs.Services
{
    public class LogEntrySvc : ILogEntrySvc
    {
        private readonly ILogEntryPersistence _logEntryPersistence;

        public LogEntrySvc()
        {
            _logEntryPersistence = new StorageDude();
        }

        public void StartPersistenceBackgroundSvcIfNotRunning()
        {
            var svcPersistence = new ServiceController(Constants.PersistenceServiceName);
            var isRunning = CheckIfPersistenceBackgroundSvcIsRunning(svcPersistence);
            if(!isRunning) svcPersistence.Start();
        }

        public bool CheckIfPersistenceBackgroundSvcIsRunning(object svcObj = null)
        {
            // Purposefully not requiring parameter of type ServiceController so
            // the UI layer does not need a reference to the System.ServiceProcess assembly
            svcObj = svcObj ?? new ServiceController(Constants.PersistenceServiceName);
            
            // If this object is of a type other than ServiceController, throwing an exception is desired here.
            var svc = (ServiceController)svcObj;
            return svc.Status == ServiceControllerStatus.Running;
        }

        public bool SaveAsPrepForQuit()
        {
            var svcIsRunning = CheckIfPersistenceBackgroundSvcIsRunning();
            if (!svcIsRunning) return false;

            _logEntryPersistence.SaveDatabaseToDisk();
            return true;
        }

        public bool StopBackgroundSvc()
        {
            var svcPersistence = new ServiceController(Constants.PersistenceServiceName);
            var svcIsRunning = CheckIfPersistenceBackgroundSvcIsRunning();
            if (!svcIsRunning) return true;

            svcPersistence.Stop();
            return true;
        }

        public bool StartBackgroundSvc()
        {
            var svcPersistence = new ServiceController(Constants.PersistenceServiceName);
            var svcIsRunning = CheckIfPersistenceBackgroundSvcIsRunning();
            if (svcIsRunning) return true;

            svcPersistence.Start();
            return true;
        }

        public bool SaveRecentLogEntries(string logEntries)
        {
            var leArray = logEntries.ConvertStringOfCommaSeparatedArrayToListOfString();
            var leTuples = ConvertLogEntryStringArrayToTuplesList(leArray);
            try
            {
                _logEntryPersistence.SaveRecentLogEntries(leTuples);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        /// <paramref name="timeStamp"/> UI will send this value as milliseconds since epoch
        public void SaveLogEntry(string timeStamp, string logEntryText)
        {
            // Front-end validation ensures the timeStamp string is ready to parse
            var ts = long.Parse(timeStamp);
            _logEntryPersistence.SaveLogEntry(ts,$"{timeStamp}{logEntryText}");
        }

        public List<LogEntryViewModel> GetLogEntries(Tuple<DateTime,DateTime> dateRange)
        {
            var dateRangeLongs = new Tuple<long, long>
                (dateRange.Item1.ToUniversalTime().ToMillisecondsSinceEpoch(),
                 dateRange.Item2.ToUniversalTime().ToMillisecondsSinceEpoch());
            var results = _logEntryPersistence.GetLogEntries(dateRangeLongs);

            if (results.Length > Constants.MaxLogEntriesServed) results = TrimResultsToMax(results);

            return ConvertLogEntryQueryByteArrayResultToLogEntryVms(results);
        }

        public List<LogEntryViewModel> GetPrevLogEntriesFiftyMax(DateTime firstSeenEntry)
        {
            throw new NotImplementedException();
        }

        public List<LogEntryViewModel> GetNextLogEntriesFiftyMax(DateTime lastSeenEntry)
        {
            throw new NotImplementedException();
        }

        public List<LogEntrySearchMatchViewModel> GetLogEntrySearchMatches(List<string> searchTerms, bool matchMeansContainsAllTerms)
        {
            throw new NotImplementedException();
        }

        private static byte[][] TrimResultsToMax(byte[][] logEntries)
        {
            // This check is a safety in case the Constants.MaxLogEntriesServed value is ever changed to an odd number
            // -it must be an even number, because of the way the data is retrieved from the database (see notes in Constants file)
            var max = Constants.MaxLogEntriesServed%2 == 0 ? Constants.MaxLogEntriesServed : Constants.MaxLogEntriesServed + 1;
            // 2 array members per logEntry: 1) timestamp 2) text; So if we have a max of n logEntries, we need n*2 array members
            max = max*2;

            if (logEntries.Length <= max) return logEntries;

            var overage = logEntries.Length - max;
            var trimmedResults = new byte[max][];
            Array.Copy(logEntries, overage, trimmedResults, 0, max);

            return trimmedResults;
        }

        private static List<LogEntryViewModel> ConvertLogEntryQueryByteArrayResultToLogEntryVms(byte[][] logEntries)
        {
            if (!logEntries.Any()) return new List<LogEntryViewModel>();
            if(logEntries.Length < 2) throw new Exception("Exactly 1 result; should be 2 or some larger multiple of 2 (or zero).");

            var logEntryVms = new List<LogEntryViewModel>();

            var ts = GetTimeStampFromByteArray(logEntries[1]);
            var prevEntryTimeStamp = ts.FromMillisecondsSinceEpochToCurrentDateTimeUtc().ToLocalTime();
            ushort entryNumber = 0;

            for (var i = 0; i < logEntries.Length; i+= 2)
            {
                entryNumber++;
                var vm = new LogEntryViewModel();

                var currentTs = GetTimeStampFromByteArray(logEntries[i + 1]);
                var currentEntryTimeStamp = currentTs.FromMillisecondsSinceEpochToCurrentDateTimeUtc().ToLocalTime();

                // If this log entry is the first of a new day in the sequence, we reset the entry number
                if (currentEntryTimeStamp.Date > prevEntryTimeStamp.Date) {
                    entryNumber = 1;
                    prevEntryTimeStamp = currentEntryTimeStamp;
                }

                // Log entry text is stored in Redis with the timestamp prepended to it; so here getting only the text after the timestamp
                // -it it stored in Redis this way to satisfy the Redis Type Sorted Set requirement that any item in the set be distinct
                var entryText = Encoding.UTF8.GetString(logEntries[i]).Substring(13);

                vm.DateTime = currentEntryTimeStamp.FormatForDisplay();
                vm.EntryNumber = entryNumber;
                vm.Text = entryText;
                vm.EpochMs = currentTs;

                logEntryVms.Add(vm);
            }

            return logEntryVms;
        }

        private List<Tuple<long, string>> ConvertLogEntryStringArrayToTuplesList(string[] leArray)
        {
            if (!leArray.Any()) return new List<Tuple<long, string>>();
            if (leArray.Length < 2) throw new Exception("Exactly 1 result; should be 2 or some larger multiple of 2 (or zero).");

            var leTuples = new List<Tuple<long, string>>();

            for (var i = 0; i < leArray.Length; i += 2)
            {
                var tsStr = leArray[i];
                // if this doesn't parse, i want an error thrown
                var currentTs = long.Parse(tsStr);
                var currentText = leArray[i + 1];
                leTuples.Add(new Tuple<long, string>(currentTs,$"{tsStr}{currentText}"));
            }

            return leTuples;
        }

        private static long GetTimeStampFromByteArray(byte[] bArr)
        {
            long ts;
            var canParseTs = long.TryParse(Encoding.UTF8.GetString(bArr), NumberStyles.Any, CultureInfo.InvariantCulture, out ts);
            // I want this error to happen if this is an issue.
            if (!canParseTs) ts = long.Parse(Encoding.UTF8.GetString(bArr));

            return ts;
        }
    }
}
