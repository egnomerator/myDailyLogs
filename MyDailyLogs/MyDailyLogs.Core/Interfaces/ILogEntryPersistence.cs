using System;
using System.Collections.Generic;

namespace MyDailyLogs.Core.Interfaces
{
    public interface ILogEntryPersistence
    {
        void SaveLogEntry(long timeStamp, string logEntryText);
        void SaveRecentLogEntries(List<Tuple<long, string>> logEntries);
        void SaveDatabaseToDisk();
        void SaveDatabaseToDiskBackground();

        byte[][] GetLogEntries(Tuple<long, long> dateRange);
    }
}
