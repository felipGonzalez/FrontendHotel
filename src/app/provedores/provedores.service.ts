import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderModel } from 'src/app/model/ProviderModel';
import { HTTP_URL } from '../model/httpStatus';


@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {

  constructor(private http: HttpClient) { }

  public getProvider(): Observable<ProviderModel[]> {
    return this.http.get<ProviderModel[]>(HTTP_URL+'listProvider');
  }

}
