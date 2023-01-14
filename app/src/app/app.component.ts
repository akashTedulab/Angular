import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 title2 = "Basic of Pipes in Angular";
 today = Date();

 capString(item:string){
  return item.toUpperCase();
 }
}

