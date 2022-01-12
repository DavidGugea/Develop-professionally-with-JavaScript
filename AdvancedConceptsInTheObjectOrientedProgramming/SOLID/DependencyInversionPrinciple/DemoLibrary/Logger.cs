using System;
using System.Collections.Generic;
using System.Text;

namespace DemoLibrary
{
    public class Logger : ILogger
    {
        public void Log(string message)
        {
            Console.WriteLine($"Write to Console: {message}");
        }
    }
}
