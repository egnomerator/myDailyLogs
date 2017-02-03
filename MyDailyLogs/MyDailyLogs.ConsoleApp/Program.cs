using MyDailyLogs.Services;
using MyDailyLogs.Services.Interfaces;

namespace MyDailyLogs.ConsoleApp
{
    public class Program
    {
        private readonly ILogEntrySvc _logEntrySvc = new LogEntrySvc();

        static void Main(string[] args)
        {

        }
    }
}
