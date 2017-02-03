using System;
using System.Text;
using ServiceStack.Redis;

namespace MyDailyLogs.DataAccess.Repositories
{
    internal static class LogEntryRepository
    {
        public static void RunRedisNativeClientExampleTestHelloWorld()
        {
            const string redisUrnMsg1 = "urn:messages:1";

            using (IRedisNativeClient client = new RedisClient())
            {
                client.Set(redisUrnMsg1, Encoding.UTF8.GetBytes("Hello World!"));
            }

            using (IRedisNativeClient client = new RedisClient())
            {
                var result = Encoding.UTF8.GetString(client.Get(redisUrnMsg1));
                Console.WriteLine($"Message: {result}");
            }

            Console.ReadLine();
        }

        public static void RunRedisClientExample()
        {
            using (IRedisClient client = new RedisClient())
            {
                var customerNames = client.Lists["urn:customernames"];
            }
        }
    }
}
