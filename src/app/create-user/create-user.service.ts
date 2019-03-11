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
  constructor(private http: HttpClient) {}

  /*
   * metodo que valida campos obligatorios
   ***/

  public validate(user: UserModel): boolean {
    let isValid = true;
    if (!user.firstName) {
      isValid = false;
    }
    if (!user.lastName) {
      isValid = false;
    }

    if (!user.phone) {
      isValid = false;
    }

    if (!user.email) {
      isValid = false;
    }

    if (!document) {
      return false;
    }

    if (!user.idTypeDocument) {
      isValid = false;
    }
   return isValid;
  }

  public saveOurUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/listUser', user);
  }

  public verifyUser(document: string): Observable<RestResponse> {

    return this.http.get<RestResponse>('http://localhost:8080/listUser/verifyUser/' + document);
  }



  public getTypeDocument(): Observable<TypeDocument[]> {
    return this.http.get<TypeDocument[]>(
      'http://localhost:8080/listTypeDocument'
    );
  }
}
