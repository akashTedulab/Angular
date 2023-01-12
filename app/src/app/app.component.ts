import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fname = 'Akash';
  lname = 'Tayde'
  myFun(val:string){
    alert(val)
    alert(this.fname)
    alert(this.lname)
  }
}
