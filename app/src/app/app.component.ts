import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  friends = ["Eren", "Gon", "Killua", "Luffy", "Zoro", "Sanji"]

  charDetails = [
    {name:"Gon", age:12, anime:"Hunter X Hunter", otherChar:["Killua", "Gin", "Kurapika", "Leorio"]},
    {name:"Luffy", age:19, anime:"One Piece", otherChar:["Zoro", "Sanji", "Chopper", "ussop"]},
    {name:"Eren", age:25, anime:"Attack on Titan", otherChar:["Mikasa", "Levi", "Armoured Titan"]},
    {name:"Thorphin", age:17, anime:"Vinland Saga", otherChar:["Thor", "Thorkill", "Askeladd"]}
  ]
}
