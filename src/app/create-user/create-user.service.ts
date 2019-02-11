import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/RestResponse.model';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  /**
   * metodo que valida campos obligatorios
   * ***/

  public validate(user: UserModel): boolean {
    let isValid = true;



    if ( !user.firstSurname) {
      isValid = false;
    }

    if ( !user.address) {
       isValid = false;
    }
    user.passwordUser = "21321321";
    console.log(user.phone);

    return isValid;
  }

  public saveOurUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>( 'http://localhost:8080/list/users' , user);
  }
}
