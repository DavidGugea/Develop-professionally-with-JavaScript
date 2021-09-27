using System;

namespace test
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 0;
            int b = 99;
            int c = a + b;

            var p = new Person() { first = "firstName", second = "secondName", age = 17 };

            Console.WriteLine(c.ToString());

            DoSomething(p, c);

            Console.WriteLine(c.ToString());
        }

        private static void DoSomething(Person p, long c)
        {
            c++;
            p.age++;
        }
    }
    class Person
    {
        public string first { get; set; }
        public string second { get; set; }
        public int age { get; set; }
    }
}
