import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private validateService: ValidateService, 
    private toastr: ToastrService,
    private authService:AuthService,
    private router:Router) {}

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

    interface RegistrationResponse {
  success: boolean;
  message: string;
  // Other properties if applicable
}


    //Required fields
    if(!this.validateService.validateRegister(user))
    {
      this.toastr.error('please fill all fields.', 'Error!');

      console.log('please fill all fields');
      return false;
    }
     //Required fields
     if(!this.validateService.validateEmail(user.email))
     {
       this.toastr.error('please use valid email.', 'Error!');
       console.log('please use valid email');
       return false;
     }
     //register user
     this.authService.registerUser(user).subscribe(data => {
      (data: RegistrationResponse) =>{
        if(data.success)
      {
        this.toastr.success('You are now registered.', 'Success!');
        this.router.navigate(['/login']);
      }else{

      }}
      
     });

}
