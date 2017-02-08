using System;

namespace MyDailyLogs.Core.Interfaces
{
    public interface ILogEntryPersistence
    {
        void SaveLogEntry(long timeStamp, string logEntryText);
        void SaveDatabaseToDisk();
        void SaveDatabaseToDiskBackground();

        byte[][] GetLogEntries(Tuple<long, long> dateRange);
    }
}
