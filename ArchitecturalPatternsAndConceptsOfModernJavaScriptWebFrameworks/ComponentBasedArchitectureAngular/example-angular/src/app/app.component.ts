import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [
    { firstName: "firstName1", lastName: "lastName1" },
    { firstName: "firstName2", lastName: "lastName2" },
    { firstName: "firstName3", lastName: "lastName3" },
    { firstName: "firstName4", lastName: "lastName4" },
  ];
}
