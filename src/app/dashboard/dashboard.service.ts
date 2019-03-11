import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInfoReserveModel } from '../model/DataInfoReserveModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


  public getNumberClientInput(): Observable<number> {
    return this.http.get<number>(
      'http://localhost:8080/listReserve/numClientInput'
    );
  }

  public getNumberClientOutput(): Observable<number> {
    return this.http.get<number>(
      'http://localhost:8080/listReserve/numClientOutput'
    );
  }

  public getNumberClient(): Observable<number> {
    return this.http.get<number>(
      'http://localhost:8080/listReserve/numberClientsHosted'
    );
  }

  public getNumberRoom(): Observable<number> {
    return this.http.get<number>(
      'http://localhost:8080/listReserve/OccupiedRoom'
    );
  }

  public getNumberRoomTotal(): Observable<number> {
    return this.http.get<number>(
      'http://localhost:8080/listReserve/totalRoom'
    );
  }

  public getReserveInput(): Observable<DataInfoReserveModel> {
    return this.http.get<DataInfoReserveModel>(
      'http://localhost:8080/listReserve/reserveInput'
    );
  }




}
