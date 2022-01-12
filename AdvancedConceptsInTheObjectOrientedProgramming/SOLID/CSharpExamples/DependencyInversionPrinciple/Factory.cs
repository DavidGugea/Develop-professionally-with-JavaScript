using System;
using System.Collections.Generic;
using System.Text;
using DemoLibrary;

namespace CSharpExample
{
    public static class Factory
    {
        public static IPerson createPerson()
        {
            return new Person();
        }
        public static IChore createChore()
        {
            return new Chore(createLogger(), createMessageSender());
        }
        public static ILogger createLogger()
        {
            return new Logger();
        }
        public static IMessageSender createMessageSender()
        {
            return new Texter();
        }
    }
}
