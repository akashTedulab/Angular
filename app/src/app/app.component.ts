import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 title2 = "Service in Angular";
 users : any;
  constructor(private userData:ServiceService) {
    userData.user().subscribe((data)=>{
      console.log(data);
      this.users = data
    });
  }
}

