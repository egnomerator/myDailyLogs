using System;
using MyDailyLogs.Core.Configuration;
using MyDailyLogs.Core.Interfaces;
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
            logEntrySvc.SaveLogEntry(DateTime.UtcNow.ToMillisecondsSinceEpoch(),"This is a test log entry.");
        }
    }
}
