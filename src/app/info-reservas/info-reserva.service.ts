import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInfoReserveModel } from '../model/DataInfoReserveModel';
import { DatesInfoReserveModel } from '../model/DatesInfoReserveModel';

@Injectable({
  providedIn: 'root'
})
export class InfoReservaService {

  constructor(private http: HttpClient) { }

  public getReserveInput(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      'http://localhost:8080/listReserve/reserveInput'
    );
  }

  public getReserveOutput(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      'http://localhost:8080/listReserve/reserveOutput'
    );
  }

  public getUserEstancia(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      'http://localhost:8080/listReserve/userEstancia'
    );
  }

  public getUserAsing(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      'http://localhost:8080/listReserve/reserveAsing'
    );
  }

  public getListHsistoryReserveOk(dateInfo: DatesInfoReserveModel): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
     'http://localhost:8080/listReserve/listHsistoryReserveOk?date=' + this.formatDate(dateInfo.dateInit) +
      '&date=' + this.formatDate(dateInfo.dateFinish)
    );
  }

  public getListHistoryReserveCancel(dateInfo: DatesInfoReserveModel): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      'http://localhost:8080/listReserve/listHistoryReserveCancel?date=' + this.formatDate(dateInfo.dateInit) +
      '&date=' + this.formatDate(dateInfo.dateFinish)
    );
  }

  public formatDate(date: Date): string  {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
}
