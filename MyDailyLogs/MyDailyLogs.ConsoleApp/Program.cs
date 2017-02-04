using System;
using MyDailyLogs.Core.Utilities;
using MyDailyLogs.Services;
using MyDailyLogs.Services.Interfaces;

namespace MyDailyLogs.ConsoleApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            ILogEntrySvc logEntrySvc = new LogEntrySvc();
            //logEntrySvc.SaveLogEntry(DateTime.UtcNow.ToMillisecondsSinceEpoch(),"This is a test log entry.");


            var min = (DateTime.UtcNow - new TimeSpan(0, 1, 0, 0)).ToMillisecondsSinceEpoch();
            var max = (DateTime.UtcNow + new TimeSpan(0, 0, 5, 0)).ToMillisecondsSinceEpoch();
            var logEntries = logEntrySvc.GetLogEntries(new Tuple<long, long>(min,max));

            logEntries.ForEach(l =>
            {
                Console.WriteLine(l.EntryDateTime);
                Console.WriteLine(l.EntryNumber);
                Console.WriteLine(l.EntryText);
            });
        }
    }
}
