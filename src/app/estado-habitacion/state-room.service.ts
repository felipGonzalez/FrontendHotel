import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateRoomModel } from '../model/StateRoomModel';

@Injectable({
  providedIn: 'root'
})
export class StateRoomService {

  constructor(private http: HttpClient) { }

  public getState(): Observable<StateRoomModel[]> {
    return this.http.get<StateRoomModel[]>('http://localhost:8080/listStateRoom');
  }
}
