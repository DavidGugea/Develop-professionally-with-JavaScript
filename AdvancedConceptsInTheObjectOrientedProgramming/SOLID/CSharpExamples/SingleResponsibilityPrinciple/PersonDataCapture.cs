using System;
using System.Collections.Generic;
using System.Text;

namespace SingleResponsibilityPrinciple
{
    public class PersonDataCapture
    {
        public static Person capture()
        {
            // Ask for output information
            Person output = new Person();

            Console.WriteLine("What is your first name: ");
            output.firstName = Console.ReadLine();

            Console.WriteLine("What is your last name: ");
            output.lastName = Console.ReadLine();

            return output;
        }
    }
}
