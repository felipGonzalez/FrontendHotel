import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderModel } from 'src/app/model/ProviderModel';
import { RestResponse } from 'src/app/model/RestResponse.model';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class CreateProvedorService {

  constructor(private http: HttpClient) { }

  public validate(provider: ProviderModel): boolean {
    let isValid = true;
    if (!provider.nameProvider) {
      isValid = false;
    }
    if (!provider.cityProvider) {
      isValid = false;
    }

    if (!provider.nitProvider) {
      isValid = false;
    }

    if (!provider.phoneProvider) {
      isValid = false;
    }
   return isValid;
  }

  public saveOurUpdate(provider: ProviderModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listProvider', provider);
  }
}
