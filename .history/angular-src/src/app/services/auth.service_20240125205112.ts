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
    headers = headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers : headers})
     .pipe(map((res: any) => res));
  }

  getProfile(){
    console.log('do kle je');
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers : headers})
     .pipe(map((res: any) => res,console.log("neki je")));
  }

  storeUserData(token: any, user: any)
  {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }

  loadToken(){
   
    const token = localStorage.getItem('id_token'); 
    //console.log(token);
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user=null;
    localStorage.clear();
  }
}
