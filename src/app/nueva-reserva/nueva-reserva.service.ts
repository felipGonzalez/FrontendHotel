import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateReserveModel } from '../model/StateReserveModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuevaReservaService {

  constructor(private http: HttpClient) { }

  public getStateReserve(): Observable<StateReserveModel[]> {
    return this.http.get<StateReserveModel[]>(
      'http://localhost:8080/listStateReserve'
    );
  }

}
