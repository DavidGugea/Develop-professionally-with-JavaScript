using System;
using System.Collections.Generic;
using System.Text;

namespace OCPLibrary
{
    public class PersonModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public EmployeeType TypeOfEmployee { get; set; } = EmployeeType.Staff;
    }
}
