import { Injectable } from '@angular/core';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user: any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers : headers})
     .pipe(map((res: any) => res));
  }

  authenticateUser(user: any){
    let headers = new HttpHeaders();
    console.log(user);
    headers = headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers : headers})
     .pipe(map((res: any) => res));
  }

  storeUserData(token: any, user: any)
  {
    localStorage.setItem('id_token', 'token');
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }
}
