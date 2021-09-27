using System;

namespace test4
{
    class Program
    {
        static void Main(string[] args)
        {
            TestClass test_class_1 = new TestClass() { x = 1, y = 2 };
            test_method();
        }
        static void test_method()
        {
            int a = 1;
            int b = 2;

            display_values(a, b);

            int d = 4;
            int e = 5;

            TestClass test_class_2 = new TestClass() { x = 3, y = 4 };

            display_values(d, e);
        }
        static void display_values(int x, int y)
        {
            Console.WriteLine("I will display some values.");
            Console.WriteLine(x);
            Console.WriteLine(y);
            Console.WriteLine("I stopped displaying values.");

            int c = 3;
        }
    }
    class TestClass
    {
        public int x { get; set; }
        public int y { get; set; }
    }
}
