import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, 
    private router:Router,
    private toasterMessage:ToastrService){
  
  }
  ngOnInit(){}
  onLogoutClick(){
    this.authService.logout();
    this.toasterMessage.info('You are logged out', "Bye");
    this.router.navigate(['/login']);
    return false;
  }
}
