using System;

namespace SingleResponsibilityPrinciple
{
    class Program
    {
        static void Main(string[] args)
        {
            StandardMessages.WelcomeMessage();
            Person user = PersonDataCapture.capture();
            bool isUserValid = PersonValidator.Validate(user);
            if (isUserValid == false)
            {
                StandardMessages.EndApplication();
                return;
            }
            AccountGenerator.CreateAccount(user);
            StandardMessages.EndApplication();
        }
    }
}
