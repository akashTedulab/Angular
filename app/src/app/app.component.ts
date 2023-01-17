import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 title2 = "Service in Angular";
 users : any;
 constructor(private userData:UsersdataService){
  userData.users().subscribe((data)=>{
    console.log(this.users = data)
  })
 }
}

