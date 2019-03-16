import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TipoReservaService } from './tipo-reserva.service';
import { TypeReserveModel } from 'src/app/model/TypeReserveModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-reserva',
  templateUrl: './tipo-reserva.component.html',
  styleUrls: ['./tipo-reserva.component.css'],
  providers: [TipoReservaService]
})
export class TipoReservaComponent implements OnInit {

  private typeReserves: Array<TypeReserveModel>;
  private displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  private dataSource;

  constructor(private tipeReserveService: TipoReservaService,
    private router: Router) {
      sessionStorage.removeItem('typeReserve');
      this.dataSource = new MatTableDataSource(this.typeReserves);
     }

  ngOnInit() {
    this.loadTypeReserve();
  }

  private loadTypeReserve(): void {
    this.tipeReserveService.getTypeReserve().subscribe(
      res => {
        this.typeReserves = res;
      },
      (error: any) => (this.typeReserves = [])
    );
  }

  public edit(typeReserve: TypeReserveModel): void {
    sessionStorage.setItem('typeReserve', JSON.stringify(typeReserve));
    this.router.navigate(['/crearTipoReserva']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get typeResrveList() {return this.typeReserves; }
  get dataSourceList() {return this.dataSource; }
  get getDisplayedColumns() {return this.displayedColumns; }

}
