import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductModel } from 'src/app/model/ProductModel';
import { Observable } from 'rxjs';
import { CategoryProductModel } from 'src/app/model/CategoryProductModel';
import { HTTP_URL } from '../model/httpStatus';
import { RestResponse } from '../model/RestResponse.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }


  public validate(product: ProductModel): boolean {
    let isValid = true;
    console.log(product.name);
    console.log(product.baseQuantity);
    console.log(product.idCategory);
    if (!product.name) {
      isValid = false;
    }
    if (!product.baseQuantity) {
      isValid = false;
    }

    if (!product.idCategory) {
      isValid = false;
    }
    console.log(isValid);

   return isValid;
  }




  public saveOurUpdate(product: ProductModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(HTTP_URL+'listProduct', product);
  }

  public getProduct(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(HTTP_URL+'listProduct');
  }

  public getCategoryProduct(): Observable<CategoryProductModel[]> {
    return this.http.get<CategoryProductModel[]>(
      HTTP_URL+'listCategoryProduct'
    );
  }

}
