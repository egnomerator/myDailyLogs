using System;
using System.Collections.Generic;
using System.Linq;
using MyDailyLogs.DataAccess.Configuration;
using MyDailyLogs.Core.Utilities;
using ServiceStack.Redis;

namespace MyDailyLogs.DataAccess.Repositories
{
    internal static class LogEntryRepository
    {
        public static void SaveLogEntry(long timeStamp, string logEntryText, IRedisNativeClient client)
        {
            try
            {
                var entryTextEncodedByteArray = logEntryText.ToUtf8EncodedByteArray();

                using (client)
                {
                    client.ZAdd(Constants.LogEntrySetId, timeStamp, entryTextEncodedByteArray);
                }
            }
            catch (Exception e)
            {
                var msg = e.Message;
                throw;
            }
        }

        public static void SaveRecentLogEntries(List<Tuple<long,string>> logEntries, IRedisNativeClient client)
        {
            try
            {
                using (client)
                {
                    logEntries.ForEach(le =>
                    {
                        client.ZAdd(Constants.LogEntrySetId, le.Item1, le.Item2.ToUtf8EncodedByteArray());
                    });
                }
            }
            catch (Exception e)
            {
                var msg = e.Message;
                throw;
            }
        }

        public static void SaveDatabaseToDisk(IRedisNativeClient client)
        {
            try
            {
                using (client)
                {
                    client.Save();
                }
            }
            catch (Exception e)
            {
                var msg = e.Message;
                throw;
            }
        }

        public static void SaveDatabaseToDiskBackground(IRedisNativeClient client)
        {
            try
            {
                using (client)
                {
                    client.BgSave();
                }
            }
            catch (Exception e)
            {
                var msg = e.Message;
                throw;
            }
        }

        public static byte[][] GetLogEntries(Tuple<long, long> dateRange, IRedisNativeClient client)
        {
            var logEntries = new byte[][] {};

            try
            {
                var r = new [] {dateRange.Item1, dateRange.Item2};
                var min = r.Min();
                var max = r.Max();

                using (client)
                {
                    logEntries = client.ZRangeByScoreWithScores(Constants.LogEntrySetId, min, max, null, null);
                }
            }
            catch (Exception e)
            {
                var msg = e.Message;
                throw;
            }

            return logEntries;
        }
    }
}
