import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductModel } from '../model/ProductModel';
import { Observable } from 'rxjs';
import { CategoryProductModel } from '../model/CategoryProductModel';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('http://localhost:8080/listProduct');
  }

  public getCategoryProduct(): Observable<CategoryProductModel[]> {
    return this.http.get<CategoryProductModel[]>(
      'http://localhost:8080/listCategoryProduct'
    );
  }

}
