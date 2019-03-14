import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateRoomModel } from 'src/app/model/StateRoomModel';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class StateRoomService {

  constructor(private http: HttpClient) { }

  public getState(): Observable<StateRoomModel[]> {
    return this.http.get<StateRoomModel[]>(HTTP_URL+'listStateRoom');
  }
}
