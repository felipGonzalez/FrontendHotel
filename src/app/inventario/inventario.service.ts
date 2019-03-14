import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductModel } from 'src/app/model/ProductModel';
import { Observable } from 'rxjs';
import { CategoryProductModel } from 'src/app/model/CategoryProductModel';
import { HTTP_URL } from '../model/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(HTTP_URL+'listProduct');
  }

  public getCategoryProduct(): Observable<CategoryProductModel[]> {
    return this.http.get<CategoryProductModel[]>(
      HTTP_URL+'listCategoryProduct'
    );
  }

}
