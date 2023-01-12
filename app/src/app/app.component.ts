import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorials';
  color = 'red';
  bgColor = 'blue';
  center = 'center'
  myFun(){
    this.color = 'blue';
    this.bgColor = 'red'
  }
}
