import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateReserveModel } from 'src/app/model/StateReserveModel';
import { HttpClient } from '@angular/common/http';
import { ReserveModel } from 'src/app/model/ReserveModel';
import { RestResponse } from 'src/app/model/RestResponse.model';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class NuevaReservaService {

  constructor(private http: HttpClient) { }


  public validate(reserve: ReserveModel): boolean {
    let isValid = true;
    if (!reserve.dateOutput) {
      isValid = false;
    }

    if (!reserve.dateReserve) {
      isValid = false;
    }

    if (!reserve.deteInput) {
      isValid = false;
    }

   if (!reserve.idClient) {
      isValid = false;
    }

    if (!reserve.idTypeReserve) {
      isValid = false;
    }

    if (!reserve.numBed) {
      isValid = false;
    }

   return isValid;
  }

  public getStateReserve(): Observable<StateReserveModel[]> {
    return this.http.get<StateReserveModel[]>(
      HTTP_URL+'listStateReserve'
    );
  }


  public saveOurUpdate(reserve: ReserveModel): Observable<RestResponse> {
    console.log(reserve);

    return this.http.post<RestResponse>(HTTP_URL+'listReserve', reserve);
  }


}
