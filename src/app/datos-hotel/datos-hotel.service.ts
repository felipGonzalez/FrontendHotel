import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from '../model/HotelModel';
import { Observable } from 'rxjs';
import { RestResponse } from '../model/RestResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DatosHotelService {

  constructor(private http: HttpClient) {}

    /**
     * metodo que valida campos obligatorios
     * ***/

    public validate(dataHotel: HotelModel): boolean {
      let isValid = true;
      if (!dataHotel.addresHotel) {
        isValid = false;
      }

      if (!dataHotel.cityHotel) {
        isValid = false;
      }

      if (!dataHotel.departmentHotel) {
        isValid = false;
      }

      if (!dataHotel.emailHotel) {
        isValid = false;
      }

      if (!dataHotel.nameHotel) {
        isValid = false;
      }
      if (!dataHotel.nifHotel) {
        isValid = false;
      }
      if (!dataHotel.phoneHotel) {
        isValid = false;
      }

      if (!dataHotel.razonHotel) {
        isValid = false;
      }

    return isValid;
    }

    public saveOurUpdate(dataHotel: HotelModel): Observable<RestResponse> {
      return this.http.post<RestResponse>('http://localhost:8080/hotelData', dataHotel);
    }

    public getData(): Observable<HotelModel> {
      return this.http.get<HotelModel>('http://localhost:8080/hotelData');
    }


}
