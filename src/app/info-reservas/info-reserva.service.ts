import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInfoReserveModel } from 'src/app/model/DataInfoReserveModel';
import { DatesInfoReserveModel } from 'src/app/model/DatesInfoReserveModel';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class InfoReservaService {

  constructor(private http: HttpClient) { }

  public getReserveInput(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      HTTP_URL+'listReserve/reserveInput'
    );
  }

  public getReserveOutput(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      HTTP_URL+'listReserve/reserveOutput'
    );
  }

  public getUserEstancia(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      HTTP_URL+'listReserve/userEstancia'
    );
  }

  public getUserAsing(): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      HTTP_URL+'listReserve/reserveAsing'
    );
  }

  public getListHsistoryReserveOk(dateInfo: DatesInfoReserveModel): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      HTTP_URL+'listReserve/listHsistoryReserveOk?date=' + this.formatDate(dateInfo.dateInit) +
      '&date=' + this.formatDate(dateInfo.dateFinish)
    );
  }

  public getListHistoryReserveCancel(dateInfo: DatesInfoReserveModel): Observable<DataInfoReserveModel[]> {
    return this.http.get<DataInfoReserveModel[]>(
      HTTP_URL+'listReserve/listHistoryReserveCancel?date=' + this.formatDate(dateInfo.dateInit) +
      '&date=' + this.formatDate(dateInfo.dateFinish)
    );
  }

  public formatDate(date: Date): string  {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
}
