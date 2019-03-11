import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateRoomModel } from 'src/app/model/StateRoomModel';
import { RestResponse } from 'src/app/model/RestResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateStateRoomService {

  constructor(private http: HttpClient) { }


  public validate(stateRoom: StateRoomModel): boolean {
    let isValid = true;
    if (!stateRoom.nameState) {
      isValid = false;
    }
    if (!stateRoom.descState) {
      isValid = false;
    }

    return isValid;
  }

  public saveOurUpdate(stateRoom: StateRoomModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/listStateRoom', stateRoom);
  }
}
