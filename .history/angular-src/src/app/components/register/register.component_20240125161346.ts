import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';


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

  constructor(private validateService: ValidateService) {}

  ngOnInit(): void {
    
  }

  onRegisterSubmit(){
    const user =
    {
      name: this.name,
      email: this.email,
      username:this.username,
      password:this.password
    }


    //Required fields
    if(!this.validateService.validateRegister(user))
    {
      console.log('please fill all fields')
      return false
    }
  }

}
