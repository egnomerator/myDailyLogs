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


            //Create ~1 month of test entries in Jan 2017 starting from Jan 31 heading backwards in 20 minute increments

            //const string testLogText = "This is a test log entry number ";
            //var testSavePeriodEnd = new DateTime(2017, 1, 31, 12, 0, 0);
            //var testSavePeriodEndUtc = testSavePeriodEnd.ToUniversalTime();
            //var lastSaveTime = testSavePeriodEndUtc;
            //for (var i = 2000; i > 0; i--)
            //{
            //    var saveTime = lastSaveTime - TimeSpan.FromMinutes(20);
            //    lastSaveTime = saveTime;

            //    var epochMs = saveTime.ToMillisecondsSinceEpoch();

            //    logEntrySvc.SaveLogEntry(epochMs, $"{testLogText}{i}");
            //}
            //Console.WriteLine("DONE!!");
            //Console.ReadLine();

            #endregion

            var min = DateTime.UtcNow - new TimeSpan(1, 0, 0, 0);
            var max = DateTime.UtcNow + new TimeSpan(1, 0, 0, 0);
            var logEntryVms = logEntrySvc.GetLogEntries(new Tuple<DateTime, DateTime>(min, max));

            logEntryVms.ForEach(l =>
            {
                Console.WriteLine($"{l.EntryNumber} | {l.DateTime} | {l.Text}");
            });

            Console.ReadLine();

        }
    }
}
