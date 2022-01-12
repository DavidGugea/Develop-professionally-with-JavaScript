namespace DemoLibrary
{
    public interface IChore
    {
        string ChoreName { get; set; }
        double HourseWorkerd { get; set; }
        bool IsComplete { get; set; }
        IPerson Owner { get; set; }

        void CompleteChore();
        void PerformedWork(double hours);
    }
}