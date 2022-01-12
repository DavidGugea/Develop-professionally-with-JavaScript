using System;
using System.Collections.Generic;
using System.Text;

namespace OCPLibrary
{
    public class EmployeeModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }

        public bool IsManager { get; set; } = false;
    }
}
