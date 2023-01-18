import { Component } from '@angular/core';
import { dataType } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 title2 = "Model and Interface";

 getData(){
  const data:dataType = {
    name: 'akash',
    id: 10,
    indian: true,
    address: '123 badlapur'
  }
  return data;
 }
}

