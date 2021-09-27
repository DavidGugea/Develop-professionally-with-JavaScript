using System;

namespace test3
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            Person p;
            p = new Person();
            */

            /*
            int age = 42;
            Person p = new Person();
            p.name = "Wally";
            p.age = age;
            */

            /*
            Person p1 = new Person("Wally", 40);
            Person p2 = new Person("Terri", 39);

            p1.Spouse = p2;
            */

            /*
            Person p = new Person("Wally", 40);
            CelebrateBirthday(p);
            */

            Person p = CreatePerson();
            Console.WriteLine(p.name);
            Console.WriteLine(p.age);
        }
        static void CelebrateBirthday(Person person)
        {
            person.age++;
        }
        static Person CreatePerson()
        {
            Person person = new Person("Wally", 40);
            return person;
        }
    }
    class Person
    {
        public string name { get; set; }
        public int age { get; set; }
        // public Person Spouse { get; set; }

        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }
    }
}
