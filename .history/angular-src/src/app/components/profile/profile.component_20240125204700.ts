import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(private authService:AuthService, private router:Router){
    
  }
  
  ngOnInit(){
    this.authService.getProfile().subscribe(profile => {
      console.log(this.user)
      this.user = profile.user;
    },err => {console.log('false')})

  }
}
