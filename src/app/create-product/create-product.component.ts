import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/model/ProductModel';
import { Router } from '@angular/router';
import { CreateProductService } from './create-product.service';
import { CategoryProductModel } from 'src/app/model/CategoryProductModel';
import { OK } from 'src/app/model/httpStatus';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  private message: string;
  private nameFormControl;
  private descFormControl;
  private isValid: boolean;
  private product: ProductModel;
  private categoryProducts: Array<CategoryProductModel>;
  private quantityBaseFormControl;
  private quantityActuallyFormControl;

  selectFormControl = new FormControl('', Validators.required);

  constructor(
    private createProductService: CreateProductService,
    private router: Router
  ) {
    if (sessionStorage.getItem('product')) {
      this.product = JSON.parse(sessionStorage.getItem('product'));
      console.log(this.product);
    } else {
      this.product = new ProductModel();
    }

    this.message = '';
    this.nameFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]);
    this.descFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]);

    this.quantityBaseFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ]);
    this.quantityActuallyFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ]);

    this.isValid = true;
  }

  ngOnInit() {
    this.loadCategoryProduct();
  }

  private loadCategoryProduct(): void {
    this.createProductService.getCategoryProduct().subscribe(
      res => {
        this.categoryProducts = res;
      },
      (error: any) => (this.categoryProducts = [])
    );
  }

  public saveOurUpdate(): void {
    this.isValid = this.createProductService.validate(this.product);
    console.log(this.isValid);

    if (this.isValid) {
       this.createProductService.saveOurUpdate(this.product).subscribe(res => {
       if (res.responseCode === OK) {
         console.log(res.responseCode);

        this.router.navigate(['/inventario']);
       } else {
         this.message = res.message;
         this.isValid = false;
       }
      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
   }

   public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  public restrictext(e) {
    let input;
    input = String.fromCharCode(e.which);
    return !!/[\D]/.test(input);
  }

  get messageInfo() {
    return this.message;
  }
  get nameControl() {
    return this.nameFormControl;
  }
  get valid() {
    return this.isValid;
  }
  get productActually() {
    return this.product;
  }
  get categoryProductList() {
    return this.categoryProducts;
  }
  get quantityBaseControl() {
    return this.quantityBaseFormControl;
  }
  get quantityActuallyControl() {
    return this.quantityActuallyFormControl;
  }
  get descControl() {
    return this.descFormControl;
  }
}
