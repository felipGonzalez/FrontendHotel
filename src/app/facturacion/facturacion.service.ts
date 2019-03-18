import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillHistoryModel } from '../model/BillHistoryModel';
import { HTTP_URL } from '../model/httpStatus';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  constructor(private http: HttpClient) { }


  public getReserveList(): Observable<BillHistoryModel[]> {
    return this.http.get<BillHistoryModel[]>(HTTP_URL+'listReserve/billHistory');
  }
}
