import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabitacionModel } from 'src/app/model/HabitacionModel';
import { StateRoomModel } from 'src/app/model/StateRoomModel';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient) { }

  public getRoom(): Observable<HabitacionModel[]> {
    return this.http.get<HabitacionModel[]>('http://localhost:8080/listRoom');
  }

  public getState(): Observable<StateRoomModel[]> {
    return this.http.get<StateRoomModel[]>('http://localhost:8080/listStateRoom');
  }
}
