import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(){}

  ngOnInit(): void {
    
  }

  OnRegisterSubmit(){
    
  }

}
