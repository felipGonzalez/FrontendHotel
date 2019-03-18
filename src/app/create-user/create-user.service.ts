import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from 'src/app/model/RestResponse.model';
import { UserModel } from 'src/app/model/UserModel';
import { TypeDocument } from 'src/app/model/TypeDocument';
import { HTTP_URL } from '../model/httpStatus';

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

    if (!user.document) {
      return false;
    }

    if (!user.idTypeDocument) {
      isValid = false;
    }

    if (!user.password) {
      user.password = user.document;
    }
   return isValid;
  }

  public saveOurUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listUser', user);
  }

  public verifyUser(document: string): Observable<RestResponse> {

    return this.http.get<RestResponse>(HTTP_URL+'listUser/verifyUser/' + document);
  }



  public getTypeDocument(): Observable<TypeDocument[]> {
    return this.http.get<TypeDocument[]>(
      HTTP_URL+'listTypeDocument'
    );
  }
}
