import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { ProductModel } from 'src/app/model/ProductModel';
import { InventarioService } from './inventario.service';
import { CategoryProductModel } from 'src/app/model/CategoryProductModel';
import { ProvedoresService } from 'src/app/provedores/provedores.service';
import { ProviderModel } from 'src/app/model/ProviderModel';
import { FormControl, Validators } from '@angular/forms';

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

  openDialog(product: ProductModel): void {
// tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ModalCompraInventario, {
      width: '800px',
      data: {id: product.id , idCategory:product.idCategory ,
        name:product.name , descProduct:product.descProduct ,
        actualQuantity: product.actualQuantity, baseQuantity: product.actualQuantity}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      product = result;
    });
  }

  get dataSourceList() { return this.dataSource; }

  get productList() {
    return this.products;
  }
  get categoryList() {
    return this.categoryProducts;
  }



}

@Component({
  selector: 'inventario-compra-modal',
  templateUrl: 'inventario-compra-modal.html',
  styleUrls: ['./inventario-compra-modal.css'],
  providers: [ProvedoresService]
})

export class ModalCompraInventario implements OnInit {

  private providers: Array<ProviderModel>;
  private selectFormControl;
  private quantityFormControl;


  constructor(
    private router: Router,
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


  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/inventario']);
  }

  get selectControl() {return this.selectFormControl; }
  get providerList() {return this.providers; }
  get quantityControl() {return this.quantityFormControl; }
}
