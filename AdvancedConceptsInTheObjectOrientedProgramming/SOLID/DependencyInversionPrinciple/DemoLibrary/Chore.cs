using System;
using System.Collections.Generic;
using System.Text;

namespace DemoLibrary
{
    public class Chore : IChore
    {
        private ILogger logger { get; set; }
        private IMessageSender messageSender { get; set; }
        public string ChoreName { get; set; }
        public IPerson Owner { get; set; }
        public double HourseWorkerd { get; set; }
        public bool IsComplete { get; set; }

        public Chore(ILogger logger, IMessageSender messageSender)
        {
            this.logger = logger;
            this.messageSender = messageSender;
        }

        public void PerformedWork(double hours)
        {
            HourseWorkerd += hours;
            this.logger.Log($"Performed work on { ChoreName }");
        }

        public void CompleteChore()
        {
            IsComplete = true;
            this.logger.Log($"Completed { ChoreName }");
            this.messageSender.SendMessage(Owner, $"The chore { ChoreName } is complete.");
        }
    }
}
