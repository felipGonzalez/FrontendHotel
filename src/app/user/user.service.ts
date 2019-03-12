import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from 'src/app/model/UserModel';
import { Observable } from 'rxjs';
import { HTTP_URL } from 'src/app/model/httpStatus';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(private http: HttpClient) { }

  public getUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(HTTP_URL+'listUser');
  }


}
