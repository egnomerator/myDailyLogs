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
                var entryTextEncodedByteArray = logEntryText.ToEncodedUtf8ByteArray();

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


        #region Examples COMMENTED OUT

        //public static void RunRedisNativeClientExampleTestHelloWorld()
        //{
        //    const string redisUrnMsg1 = "urn:messages:1";

        //    using (IRedisNativeClient client = new RedisClient())
        //    {
        //        client.Set(redisUrnMsg1, Encoding.UTF8.GetBytes("Hello World!"));
        //    }

        //    using (IRedisNativeClient client = new RedisClient())
        //    {
        //        var result = Encoding.UTF8.GetString(client.Get(redisUrnMsg1));
        //        Console.WriteLine($"Message: {result}");
        //    }

        //    Console.ReadLine();
        //}

        //public static void RunRedisClientExample()
        //{
        //    using (IRedisClient client = new RedisClient())
        //    {
        //        var customerNames = client.Lists["urn:customernames"];
        //    }
        //}

        #endregion
    }
}
