import { Injectable, TypeProvider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeReserveModel } from 'src/app/model/TypeReserveModel';
import { Observable } from 'rxjs';
import { RestResponse } from 'src/app/model/RestResponse.model';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class CreateTipoReservaService {

  constructor(private http: HttpClient) { }

  public validate(typeReserve: TypeReserveModel): boolean {
    let isValid = true;
    if (!typeReserve.nameType) {
      isValid = false;
    }
    if (!typeReserve.reservationTypePrice) {
      isValid = false;
    }
    return isValid;
  }

  public saveOurUpdate(typeReserve: TypeReserveModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listTypeReserve', typeReserve);
  }

  public getTypeReserve(): Observable<TypeReserveModel[]> {
    return this.http.get<TypeReserveModel[]>(
      HTTP_URL+'listTypeReserve'
    );
  }
}
