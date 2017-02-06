﻿using System;
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

        public byte[][] GetLogEntries(Tuple<long, long> dateRange)
        {
            return LogEntryRepository.GetLogEntries(dateRange, new RedisClient());
        }
    }
}
