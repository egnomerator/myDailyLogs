using System;

namespace MyDailyLogs.Core.Configuration
{
    public static class Constants
    {
        public static DateTime Epoch = new DateTime(1970, 1, 1);
        public const string DisplayPatternDateTime = "MM/dd/yyyy hh:mm:ss zzz";

        // This Number is what the byte[][] of LogEntries that is returned from Redis will be trimmed down to if necessary
        // This number has to be EVEN because each log entry will be retrieved from Redis in 2 pieces:
        //      1) the timestamp 2) the text
        // (The business logic will still check whether it's even and make add 1 if necessary)
        public const int MaxLogEntriesServed = 40;
    }
}
