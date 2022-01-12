using System;
using System.Collections.Generic;
using System.Text;

namespace OCPLibrary
{
    public class Accounts
    {
        public EmployeeModel Create(PersonModel person)
        {
            EmployeeModel output = new EmployeeModel();

            output.FirstName = person.FirstName;
            output.LastName = person.LastName;
            output.EmailAddress = $"{ person.FirstName.Substring(0, 1) }{ person.LastName }@acme.com";

            if(person.TypeOfEmployee == EmployeeType.Manager)
            {
                output.IsManager = true;
            }

            return output;
        }
    }
}
