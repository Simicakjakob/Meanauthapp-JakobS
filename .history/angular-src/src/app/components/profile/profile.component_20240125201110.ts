import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user:Object;
  constructor(private authService:AuthService, private router:Router){
    
  }
  ngOnInit(){
    this.authService.getProfile(this.user).subscribe(profile => {
      this.user = profile.user;
    },err => {console.log('false')})

  }
}
