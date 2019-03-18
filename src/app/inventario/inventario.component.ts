import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { ProductModel } from 'src/app/model/ProductModel';
import { InventarioService } from './inventario.service';
import { CategoryProductModel } from 'src/app/model/CategoryProductModel';
import { ProvedoresService } from 'src/app/provedores/provedores.service';
import { ProviderModel } from 'src/app/model/ProviderModel';
import { FormControl, Validators } from '@angular/forms';
import { CreateProductService } from '../create-product/create-product.service';
import { OK } from '../model/httpStatus';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  providers: [InventarioService]
})

export class InventarioComponent implements OnInit {
  private products: Array<ProductModel>;
  displayedColumns: string[] = [
    'id',
    'name',
    'idCategory',
    'baseQuantity',
    'actualQuantity',
    'action'
  ];
  private dataSource;
  private categoryProducts: Array<CategoryProductModel>;
  cantidad;

  quantityControl= new FormControl('', [
    Validators.required,
    Validators.maxLength(10)
  ]);;

  constructor(
    private productService: InventarioService,
    private router: Router,
    public dialog: MatDialog
  ) {
    sessionStorage.removeItem('product');
    this.dataSource = new MatTableDataSource(this.products);
  }

  ngOnInit() {
    this.loadCategoryProduct();
    this.loadProducts();
  }

  private loadCategoryProduct(): void {
    this.productService.getCategoryProduct().subscribe(
      res => {
        this.categoryProducts = res;

      },
      (error: any) => (this.categoryProducts = [])
    );
  }
  private loadProducts(): void {
    this.productService.getProduct().subscribe(
      res => {
        this.products = res;
        this.dataSource.data = this.products;

      },
      (error: any) => (this.products = [])
    );
  }

  public getTextCategory(id: number) {
    let text;
    this.categoryProducts.forEach(function(element) {
      if (element.id === id) {
        text = element.nameCategory;
      }
    });
    return text;
  }

  public edit(product: ProductModel): void {
    sessionStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['/createProduct']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  get dataSourceList() { return this.dataSource; }

  get productList() {
    return this.products;
  }
  get categoryList() {
    return this.categoryProducts;
  }



  openDialog(product: ProductModel): void {
    // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(ModalCompraInventario, {
          width: '800px',
          data: {id: product.id , idCategory:product.idCategory ,
            name:product.name , descProduct:product.descProduct ,
            actualQuantity: product.actualQuantity, baseQuantity: product.baseQuantity}
        });

        dialogRef.afterClosed().subscribe(result => {
         this.loadProducts();
        });
      }

      saveProduct(product: ProductModel) {
        sessionStorage.setItem('product1', JSON.stringify(product));
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

    deleteProduct():void {
      var product: ProductModel
      if (sessionStorage.getItem('product1')) {


        product = JSON.parse(sessionStorage.getItem('product1'));

        if(product.actualQuantity > this.cantidad) {


          product.actualQuantity = Number(product.actualQuantity) - Number(this.cantidad);
          this.saveOurUpdate(product);
        }else {
          this.cantidad = null;
        }
      }
  }

  public saveOurUpdate(product:ProductModel): void {

    if (this.productService.validate(product)) {

        this.productService.saveOurUpdate(product).subscribe(res => {
       if (res.responseCode === OK) {
        this.loadProducts();
       } else {

       }
      });
    } else {

    }
   }

}

@Component({
  selector: 'inventario-compra-modal',
  templateUrl: 'inventario-compra-modal.html',
  styleUrls: ['./inventario-compra-modal.css'],
  providers: [ProvedoresService, InventarioService]
})

export class ModalCompraInventario implements OnInit {

  private providers: Array<ProviderModel>;
  private selectFormControl;
  private quantityFormControl;
  price:number;
  quantity:number;

  priceFormControl= new FormControl('', [
    Validators.required,
    Validators.maxLength(10)
  ]);;




  constructor(
    private router: Router,
    private productService: InventarioService,
    public dialogRef: MatDialogRef<ModalCompraInventario>,
    private providerService: ProvedoresService,
    @Inject(MAT_DIALOG_DATA) public data: ProductModel) {
      this.selectFormControl = new FormControl('', Validators.required);
      this.quantityFormControl = new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]);

    }

    ngOnInit() {
      this.loadCategoryProduct();
    }

    private loadCategoryProduct(): void {
      this.providerService.getProvider().subscribe(
        res => {
          this.providers = res;
        },
        (error: any) => (this.providers = [])
      );
    }


    public saveOurUpdate(): void {

      if (this.productService.validate(this.data)) {

        this.data.actualQuantity = Number(this.data.actualQuantity) + Number(this.quantity);
          this.productService.saveOurUpdate(this.data).subscribe(res => {
         if (res.responseCode === OK) {
          this.onNoClick();
         } else {

         }
        });
      } else {

      }
     }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/inventario']);
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

  get selectControl() {return this.selectFormControl; }
  get providerList() {return this.providers; }
  get quantityControl() {return this.quantityFormControl; }
}
