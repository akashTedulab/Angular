import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 userDetails = [
  {name:"Akash", email:"akash@test.com"},
  {name:"Gon", email:"gon@test.com"},
  {name:"Killua", email:"killua@test.com"},
  {name:"Luffy", email:"Luffy@test.com"}
 ]
}

