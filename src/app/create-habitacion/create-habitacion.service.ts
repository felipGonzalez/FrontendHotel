import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HabitacionModel } from '../model/HabitacionModel';
import { Observable } from 'rxjs';
import { RestResponse } from '../model/RestResponse.model';
import { CategoryProductModel } from '../model/CategoryProductModel';
import { StateRoomModel } from '../model/StateRoomModel';

@Injectable({
  providedIn: 'root'
})
export class CreateHabitacionService {

  constructor(private http: HttpClient) { }


  public validate(room: HabitacionModel): boolean {
    let isValid = true;
    if (!room.codeRoom) {
      isValid = false;
    }
    if (!room.stateRoom) {
      isValid = false;
    }

    if (!room.capacityRoom) {
      isValid = false;
    }
   return isValid;
  }

  public saveOurUpdate(room: HabitacionModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/listRoom', room);
  }

  public getStateRoom(): Observable<StateRoomModel[]> {
    return this.http.get<StateRoomModel[]>(
      'http://localhost:8080/listStateRoom'
    );
  }
}
