import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin, ISignIn } from '../modals/auth';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  auth_Base_Url : string = environment.authBaseUrl
  private userRole$ :Subject<string> = new Subject<string>();
  userroleObservable$ = this.userRole$.asObservable();
  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit(): void {

  }



  login(userdetails : ILogin) : Observable<any>{
    let login_Url = `${this.auth_Base_Url}/api/auth/login`
    return this._http.post<any>(login_Url, userdetails)
  }

  SignIn(userDetails : ISignIn) : Observable<any>{
    let Signinurl = `${this.auth_Base_Url}/api/auth/register`
    return this._http.post<any>(Signinurl, userDetails)
  }

  saveToken(token : string){
    localStorage.setItem('token', token)
  }

  saveUserRole(userRole : string){
    localStorage.setItem('userRole', userRole)
    this.userRole$.next(userRole);
  }

  getToken():string | null{
    return localStorage.getItem('token')
  }

  getUserRole() : string{
    return localStorage.getItem('userRole') || '';
  }

  LogOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
  }
}
