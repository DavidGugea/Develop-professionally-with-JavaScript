using System;
using DemoLibrary;

namespace CSharpExample
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            High level modules should not depend on low-level modules but 
            rather both should depend on abstractions and those abstractions
            should not depend on details.

            A high-level module means anything that is pulling something else.
            static void Main calls into the Person class, the Chore class, so
            it depend on the Person and Chore class would be a high level 
            module because it depends on something of lower level.

            The Chore class is a high level module as well because
            it depends on the logger, the person and the emailer class.

            The Email and Logger don't depend on nothing, we call them
            low-level modules.

            The high-level modules Chore and Program depend on the lower-level
            ones. That means that I couldn't change how the Logger works 
            because that would break Chore, which would break our Program.cs.
            */

            IPerson owner = Factory.createPerson();
            owner.FirstName = "Tim";
            owner.LastName = "Corey";
            owner.EmailAddress = "tim@iatmtimcorey.com";
            owner.PhoneNumber = "555-1212";

            IChore chore = Factory.createChore();
            chore.ChoreName = "Take out the trash";
            chore.Owner = owner;

            chore.PerformedWork(3);
            chore.PerformedWork(1.5);
            chore.CompleteChore();

            Console.ReadLine();
        }
    }
}
