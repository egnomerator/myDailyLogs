using System;
using System.Web;
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
            _logEntrySvc.StartPersistenceBackgroundSvcIfNotRunning();
            // GET TEST DATA
            //var max = new DateTime(2017, 1, 31, 12, 0, 0);                // start with end of test data and move back
            //var min = DateTime.UtcNow - new TimeSpan(31, 0, 0, 0);        // get past full month
            //var min = max - new TimeSpan(0, 24, 0, 0);                    // get past 24 hours
            //var min = max - new TimeSpan(0, 3, 0, 0);                     // get past 3 hours
            //var min = max - new TimeSpan(0, 1, 0, 0);                     // get past hour

            // Default Range
            var max = DateTime.Now;
            var min = max - new TimeSpan(5, 0, 0, 0);

            var logEntryVms = _logEntrySvc.GetLogEntries(new Tuple<DateTime, DateTime>(min, max));
            return View(logEntryVms);
        }

        ////
        //// POST: /Home/SaveNewLogEntry

        //[HttpPost]
        //public void SaveNewLogEntry(string timeStamp, string logEntryText)
        //{
        //    var decodedStr = HttpUtility.UrlDecode(logEntryText);
        //    _logEntrySvc.SaveLogEntry(timeStamp,decodedStr);
        //}

        //
        // POST: /Home/SaveRecentLogEntries

        [HttpPost]
        public bool SaveRecentLogEntries(string logEntries)
        {
            var decodedStr = HttpUtility.UrlDecode(logEntries);
            return _logEntrySvc.SaveRecentLogEntries(decodedStr);
        }

        //
        // POST: /Home/SaveAsPrepForQuit

        [HttpPost]
        public bool SaveAsPrepForQuit()
        {
            return _logEntrySvc.SaveAsPrepForQuit();
        }

        //
        // POST: /Home/StopBackgroundSvc

        [HttpPost]
        public bool StopBackgroundSvc()
        {
            return _logEntrySvc.StopBackgroundSvc();
        }

        //
        // POST: /Home/StartBackgroundSvc

        [HttpPost]
        public bool StartBackgroundSvc()
        {
            return _logEntrySvc.StartBackgroundSvc();
        }

        //
        // GET: /Home/CheckBackgroundSvc

        public bool CheckBackgroundSvc()
        {
            return _logEntrySvc.CheckIfPersistenceBackgroundSvcIsRunning();
        }

        public ActionResult About()
        {
            ViewBag.Message = "This is a handy little manual logging app.";
            return View();
        }
    }
}