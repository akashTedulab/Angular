import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value:string = ""
  myFun(val:string){
    this.value = val;
    console.log(val)
  }
}
