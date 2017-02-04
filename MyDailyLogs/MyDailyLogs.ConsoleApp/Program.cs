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

            #region Testing Log Entry Creation: COMMENTED OUT

            //for (var i = 0; i < 5; i++)
            //{
            //    logEntrySvc.SaveLogEntry(DateTime.UtcNow.ToMillisecondsSinceEpoch(), $"This is test log entry number {i}.");
            //}

            //var tomorrow = (DateTime.UtcNow + new TimeSpan(1, 0, 0, 0)).ToMillisecondsSinceEpoch();
            //logEntrySvc.SaveLogEntry(tomorrow, "This is a test log entry from da fyootcha.");


            #endregion

            var min = (DateTime.UtcNow - new TimeSpan(1, 0, 0, 0)).ToMillisecondsSinceEpoch();
            var max = (DateTime.UtcNow + new TimeSpan(1, 0, 0, 0)).ToMillisecondsSinceEpoch();
            var logEntries = logEntrySvc.GetLogEntries(new Tuple<long, long>(min,max));

            logEntries.ForEach(l =>
            {
                Console.WriteLine($"{l.EntryNumber} | {l.EntryDateTime} | {l.EntryText}");
            });

            Console.ReadLine();
        }
    }
}
