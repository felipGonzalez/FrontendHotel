import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReserveModel } from 'src/app/model/ReserveModel';
import { StateReserveModel } from 'src/app/model/StateReserveModel';
import { RestResponse } from 'src/app/model/RestResponse.model';
import { TypeReserveModel } from 'src/app/model/typeReserveModel';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  public saveOurUpdate(reserve: ReserveModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/listReserve', reserve);
  }

  public getReserveList(): Observable<ReserveModel[]> {
    return this.http.get<ReserveModel[]>(
      'http://localhost:8080/listReserve/reserveActually'
    );
  }

  public getStateReserve(): Observable<StateReserveModel[]> {
    return this.http.get<StateReserveModel[]>(
      'http://localhost:8080/listStateReserve'
    );
  }

  public getTypeReserve(): Observable<TypeReserveModel[]> {
    return this.http.get<TypeReserveModel[]>(
      'http://localhost:8080/listTypeReserve'
    );
  }
}
