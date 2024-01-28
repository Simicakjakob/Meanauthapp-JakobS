import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

constructor(private authService: AuthService, 
  private router:Router,
  private toasterMessage:ToastrService){

}
ngOnInit(){}

onLoginSubmit(){
  const user = {
    username: this.username,
    password: this.password
  }
  console.log(this.username);
  this.authService.authenticateUser(user).subscribe(data => {
    if(data.success){

    }else{
      console.log(data)
      this.toasterMessage.error(data.message, 'Error!');

    }

  });
};

}
