import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular2';
  pageHeader : string = 'Employee Details';
  pageName :string = 'Kundan';
  imagePath : string = 'assets/panda.jpg';
    firstName :string = 'Rajiv';
  lastName : string = 'Thakur';
  video: string = "https://www.youtube.com/embed/CD-E-LDc384";
  img : string = "assets/apple.jpg";

  getFullName() :string {
    return this.firstName+' '+this.lastName;
  }
}
