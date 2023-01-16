import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angular Tutorials';
 title2 = "Reactive Form";
 loginForm = new FormGroup({
  username: new FormControl('', [Validators.required,  Validators.pattern('[a-z A-Z]+$')]),
  email: new FormControl('', [Validators.email, Validators.required]),
  password: new FormControl('',[Validators.minLength(5), Validators.required])
 });
 login(){
  console.log(this.loginForm.value)
 }
 get user(){
  return this.loginForm.get('username')
 }
 get email(){
  return this.loginForm.get('email')
 }
 get password(){
  return this.loginForm.get('password')
 }
}

