using System;
using System.Collections.Generic;

namespace MyDailyLogs.Core.Interfaces
{
    public interface ILogEntryPersistence
    {
        void SaveLogEntry(long timeStamp, string logEntryText);


        byte[][] GetLogEntries(Tuple<long, long> dateRange);
    }
}
