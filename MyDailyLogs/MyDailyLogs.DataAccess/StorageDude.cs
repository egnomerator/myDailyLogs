using System;
using System.Collections.Generic;
using MyDailyLogs.Core.Interfaces;
using MyDailyLogs.DataAccess.Repositories;
using ServiceStack.Redis;

namespace MyDailyLogs.DataAccess
{
    public class StorageDude : ILogEntryPersistence
    {
        public void SaveLogEntry(long timeStamp, string logEntryText)
        {
            LogEntryRepository.SaveLogEntry(timeStamp, logEntryText, new RedisClient());
        }

        public void SaveRecentLogEntries(List<Tuple<long, string>> logEntries)
        {
            LogEntryRepository.SaveRecentLogEntries(logEntries, new RedisClient());
        }

        public void SaveDatabaseToDisk()
        {
            LogEntryRepository.SaveDatabaseToDisk(new RedisClient());
        }

        public void SaveDatabaseToDiskBackground()
        {
            LogEntryRepository.SaveDatabaseToDiskBackground(new RedisClient());
        }

        public byte[][] GetLogEntries(Tuple<long, long> dateRange)
        {
            return LogEntryRepository.GetLogEntries(dateRange, new RedisClient());
        }
    }
}
