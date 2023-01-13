import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 list:any[] = []
 addTask(val:string){
  this.list.push({id:this.list.length, name:val})
 }
 deleteItem(id:number){
  this.list = this.list.filter( item => item.id != id)
  console.log(id)
 }
}

