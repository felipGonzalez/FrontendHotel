import { UserInterface } from './../model/UserLogin';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginUser() :  Observable<UserInterface> {
    return this.http.get<UserInterface>(
    HTTP_URL+'loginAdmin',
    {headers: this.headers}
    )
    .pipe(map(data => data));
  }

  setToken(token): void {
    console.log("token: " + token);

    localStorage.setItem("accessToken", token);
  }

  setUser(user: UserInterface){
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }
}
