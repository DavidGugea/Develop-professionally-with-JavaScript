using System;

namespace test2
{
    class Program
    {
        static void Main(string[] args)
        {
            int score = 95;
            int score2 = score;

            Console.WriteLine("score = {0}, score2 = {1}", score, score2);

            Report report = new Report()
            {
                Title = "First Report",
                Desc = "This is the first report",
                Pages = 11
            };

            Report report2 = report;
            report2.Pages = 999;
            Console.WriteLine(report.Display());
            Console.WriteLine(report2.Display());
        }
    }
    struct Report
    {
        public string Title { get; set; }
        public string Desc { get; set; }
        public int Pages { get; set; }

        public string Display()
        {
            return String.Format("{0}: {1}, pp, {2}", Title, Desc, Pages);
        }
    }
}
