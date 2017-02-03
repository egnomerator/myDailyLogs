using System;
using MyDailyLogs.Core.Configuration;

namespace MyDailyLogs.Core.Utilities
{
    public static class Extensions
    {
        public static long ToMillisecondsSinceEpoch(this DateTime dt)
        {
            return (long)(dt - Constants.Epoch).TotalMilliseconds;
        }

        public static DateTime FromMillisecondsSinceEpochToCurrentDateTime(this long mSinceEpoch)
        {
            return Constants.Epoch.AddMilliseconds(mSinceEpoch);
        }
    }
}
