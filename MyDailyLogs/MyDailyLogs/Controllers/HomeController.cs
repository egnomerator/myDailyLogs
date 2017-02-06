using System;
using System.Web.Mvc;
using MyDailyLogs.Services;
using MyDailyLogs.Services.Interfaces;

namespace MyDailyLogs.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogEntrySvc _logEntrySvc;
        public HomeController()
        {
            _logEntrySvc = new LogEntrySvc();
        }
        public ActionResult Index()
        {
            var max = new DateTime(2017, 1, 31, 12, 0, 0);
            //var min = DateTime.UtcNow - new TimeSpan(31, 0, 0, 0);        // get past full month
            var min = max - new TimeSpan(0, 24, 0, 0);                       // get past 24 hours
            //var min = max - new TimeSpan(0, 3, 0, 0);                     // get past 3 hours
            //var min = max - new TimeSpan(0, 1, 0, 0);                     // get past hour

            var logEntryVms = _logEntrySvc.GetLogEntries(new Tuple<DateTime, DateTime>(min, max));
            return View(logEntryVms);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}