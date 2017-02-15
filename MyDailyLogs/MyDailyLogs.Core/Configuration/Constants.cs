using System;

namespace MyDailyLogs.Core.Configuration
{
    public static class Constants
    {
        public static string PersistenceServiceName = "Redis";
        public static DateTime Epoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
        public const string DisplayPatternDateTime = "MM/dd/yyyy hh:mm:ss zzz";

        // This Number is what the byte[][] of LogEntries that is returned from Redis will be trimmed down to if necessary
        // This number has to be EVEN because each log entry will be retrieved from Redis in 2 pieces:
        //      1) the timestamp 2) the text
        // (The business logic will still check whether this limit is even and add 1 to this limit if it is odd)
        public const int MaxLogEntriesServed = 40;


        // Attempted to select a char set that a user would be extremely unlikely to includ in 
        // any log entry data either on purpose or accidental.
        //      -Chosen based on:
        //          -a combination of the characters' keyboard location and sequence
        //          -some less commonly used characters
        //
        //
        // **THIS MUST MATCH the corresponding string in the ViewModal project's constants class**
        public const string LogEntryStrArraySeparator = @"~)z@[\b`\/_6`";
        // The above separator string is represented below as a regex searchable pattern
        public const string RegexifiedLogEntryStrArrSeparator = @"[~][)][z][@][[][\\][b][`][\\][\/][_][6][`]";
    }
}
