import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/RestResponse.model';
import { UserModel } from '../model/UserModel';
import { TypeDocument } from '../model/TypeDocument';

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
    console.log(user.idTypeDocument);
    if ( !user.lastName) {
      isValid = false;
    }
    if ( !user.city) {
       isValid = false;
    }
    return isValid;
    }

  public saveOurUpdate(user: UserModel): Observable<RestResponse> {
    console.log(user.password);

    return this.http.post<RestResponse>( 'http://localhost:8080/listUser' , user);
  }

  public getTypeDocument(): Observable<TypeDocument[]> {
    return this.http.get<TypeDocument[]>('http://localhost:8080/listTypeDocument');
  }


}
