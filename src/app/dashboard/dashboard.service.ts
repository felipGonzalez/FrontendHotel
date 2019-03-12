import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInfoReserveModel } from 'src/app/model/DataInfoReserveModel';
import { HTTP_URL } from 'src/app/model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


  public getNumberClientInput(): Observable<number> {
    return this.http.get<number>(
      HTTP_URL+'listReserve/numClientInput'
    );
  }

  public getNumberClientOutput(): Observable<number> {
    return this.http.get<number>(
      HTTP_URL+'listReserve/numClientOutput'
    );
  }

  public getNumberClient(): Observable<number> {
    return this.http.get<number>(
      HTTP_URL+'listReserve/numberClientsHosted'
    );
  }

  public getNumberRoom(): Observable<number> {
    return this.http.get<number>(
      HTTP_URL+'listReserve/OccupiedRoom'
    );
  }

  public getNumberRoomTotal(): Observable<number> {
    return this.http.get<number>(
      HTTP_URL+'listReserve/totalRoom'
    );
  }

  public getReserveInput(): Observable<DataInfoReserveModel> {
    return this.http.get<DataInfoReserveModel>(
      HTTP_URL+'listReserve/reserveInput'
    );
  }




}
