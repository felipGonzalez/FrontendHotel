import { Injectable } from '@angular/core';
import { TypeReserveModel } from 'src/app/model/TypeReserveModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoReservaService {

  constructor(private http: HttpClient) { }

  public getTypeReserve(): Observable<TypeReserveModel[]> {
    return this.http.get<TypeReserveModel[]>('http://localhost:8080/listTypeReserve');
  }
}
