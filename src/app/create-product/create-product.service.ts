import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from 'src/app/model/RestResponse.model';
import { CategoryProductModel } from 'src/app/model/CategoryProductModel';
import { ProductModel } from 'src/app/model/ProductModel';
import { HTTP_URL } from '../model/httpStatus';


@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  constructor(private http: HttpClient) { }


  public validate(product: ProductModel): boolean {
    let isValid = true;
    if (!product.name) {
      isValid = false;
    }
    if (!product.baseQuantity) {
      isValid = false;
    }

    if (!product.idCategory) {
      isValid = false;
    }
   return isValid;
  }

  public saveOurUpdate(product: ProductModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listProduct', product);
  }

  public getCategoryProduct(): Observable<CategoryProductModel[]> {
    return this.http.get<CategoryProductModel[]>(
      HTTP_URL+'listCategoryProduct'
    );
  }
}
