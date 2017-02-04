using System;
using System.Text;
using MyDailyLogs.Core.Configuration;

namespace MyDailyLogs.Core.Utilities
{
    public static class Extensions
    {
        #region Epoch Milliseconds And DateTime Conversion

        public static long ToMillisecondsSinceEpoch(this DateTime dt)
        {
            return (long)(dt - Constants.Epoch).TotalMilliseconds;
        }

        public static DateTime FromMillisecondsSinceEpochToCurrentDateTimeUtc(this long mSinceEpoch)
        {
            return Constants.Epoch.AddMilliseconds(mSinceEpoch);
        }

        public static string FormatForDisplay(this DateTime dt)
        {
            return $"{dt:MM/dd/yyyy hh:mm:ss zzz}";
        }

        #endregion

        public static byte[] ToEncodedUtf8ByteArray(this string str)
        {
            return Encoding.UTF8.GetBytes(str);
        }


    }
}
