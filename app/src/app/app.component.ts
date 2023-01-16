import { Component } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 title2 = "Reactive Form";
 loginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
 })
 login(){
  console.log(this.loginForm.value)
 }
}

