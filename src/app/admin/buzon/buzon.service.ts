import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailboxModel } from 'src/app/model/MailboxModel';
import { HTTP_URL } from 'src/app/model/httpStatus';
import { RestResponse } from 'src/app/model/RestResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BuzonService {

  constructor(private http: HttpClient) { }

  public validate(mailbox: MailboxModel): boolean {
    let isValid = true;
    if (!mailbox.idMessage) {
      isValid = false;
    }

    if (!mailbox.nameClient) {
      isValid = false;
    }

    if (!mailbox.lastClient) {
      isValid = false;
    }

   if (!mailbox.emailClient) {
      isValid = false;
    }

    if (!mailbox.affair) {
      isValid = false;
    }

    if (!mailbox.message) {
      isValid = false;
    }

   return isValid;
  }

  public getListMailbox(): Observable<MailboxModel[]> {
    return this.http.get<MailboxModel[]>(
      HTTP_URL+'listMailbox'
    );
  }


  public saveOurUpdate(mailbox: MailboxModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listMailbox', mailbox);
  }
}
