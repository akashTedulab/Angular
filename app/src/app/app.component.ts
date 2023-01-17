import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 title2 = "Service in Angular";
 users:any;
 constructor(private userdata:UserdataService){
  console.log("userdata", userdata.users())
  this.users = userdata.users()
 }
}

