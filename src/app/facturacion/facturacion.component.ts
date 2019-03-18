import { Component, OnInit } from '@angular/core';
import { BillHistoryModel } from '../model/BillHistoryModel';
import { FacturacionService } from './facturacion.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
  providers: [FacturacionService]
})
export class FacturacionComponent implements OnInit {


  displayedColumns: string[] = ['documento', 'nombres', 'fecha_reserva', 'tipo',
  'fecha_inicial', 'fecha_final', 'importe'];


  private bills: Array<BillHistoryModel>;
  private dataSource;
  private message:string;
  private valid:boolean;

  constructor(private billService: FacturacionService) {
    this.dataSource = new MatTableDataSource(this.bills);
    this.valid = true;
   }

  ngOnInit() {
    this.loadBills();
  }

  private loadBills(): void {
    this.billService.getReserveList().subscribe(
      res => {
        this.bills = res;
        this.dataSource.data = this.bills;
        this.valid = false;
      },
      (error: any) => (this.bills = [],
        this.message = "No hay facturas disponibles"),
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get getListBill() {
    return this.bills;
  }

  get getDataSource() {
    return this.dataSource;
  }
  get getMessage(){
    return this.message
  }

  get isValid() {
    return this.valid;
  }

}
