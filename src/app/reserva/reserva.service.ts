import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReserveModel } from 'src/app/model/ReserveModel';
import { StateReserveModel } from 'src/app/model/StateReserveModel';
import { RestResponse } from 'src/app/model/RestResponse.model';
import { TypeReserveModel } from 'src/app/model/TypeReserveModel';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  public saveOurUpdate(reserve: ReserveModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listReserve', reserve);
  }

  public getReserveList(): Observable<ReserveModel[]> {
    return this.http.get<ReserveModel[]>(
      HTTP_URL+'listReserve/reserveActually'
    );
  }

  public getReserveNotAssign(): Observable<ReserveModel[]> {
    return this.http.get<ReserveModel[]>(
      HTTP_URL+'listReserve/reserveNotAssign'
    );
  }

  public getStateReserve(): Observable<StateReserveModel[]> {
    return this.http.get<StateReserveModel[]>(
      HTTP_URL+'listStateReserve'
    );
  }

  public getTypeReserve(): Observable<TypeReserveModel[]> {
    return this.http.get<TypeReserveModel[]>(
      HTTP_URL+'listTypeReserve'
    );
  }
}
