import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/UserModel';
import { HTTP_URL } from '../model/httpStatus';
import { Observable } from 'rxjs';
import { HabitacionModel } from '../model/HabitacionModel';
import { ReserveModel } from '../model/ReserveModel';
import { TypeReserveModel } from '../model/TypeReserveModel';
import { RestResponse } from '../model/RestResponse.model';
import { DetailReserveModel } from '../model/DetailReserveModel';
import { HabitacionDisponibleModel } from '../model/HabitacionDisponibleModel';

@Injectable({
  providedIn: 'root'
})
export class ReservaHabitacionService {

  constructor(private http: HttpClient) { }


  public getReserveUser(idUser: number): Observable<UserModel> {
    return this.http.get<UserModel>(
      HTTP_URL+'listReserve/listUser/getUser/'+idUser
    );
  }

  public getListIndividualAvailableRoom(dateInfo: ReserveModel): Observable<HabitacionModel[]> {
    return this.http.get<HabitacionModel[]>(
      HTTP_URL+'listReserve/listIndividualAvailableRoom?date=' + this.formatDate(dateInfo.deteInput) +
      '&date=' + this.formatDate(dateInfo.dateOutput)
    );
  }


  public getListSharedRoomAvailable(dateInfo: ReserveModel): Observable<HabitacionDisponibleModel[]> {
    return this.http.get<HabitacionDisponibleModel[]>(
      HTTP_URL+'listReserve/listSharedAvailableRoom?date=' + this.formatDate(dateInfo.deteInput) +
      '&date=' + this.formatDate(dateInfo.dateOutput)
    );
  }

  public formatDate(date1: Date): string  {
    let date = new Date(date1.toString());
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }


  public getTypeReserve(): Observable<TypeReserveModel[]> {
    return this.http.get<TypeReserveModel[]>(
      HTTP_URL+'listTypeReserve'
    );
  }

  public saveOurUpdateReserve(reserve: ReserveModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listReserve', reserve);
  }

  public saveOurUpdateDetail(detail: DetailReserveModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listReserve/detailReserve', detail);
  }

}
