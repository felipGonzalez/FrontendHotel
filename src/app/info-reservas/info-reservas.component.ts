import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatesInfoReserveModel } from 'src/app/model/DatesInfoReserveModel';
import { DataInfoReserveModel } from 'src/app/model/DataInfoReserveModel';
import { MatTableDataSource } from '@angular/material';
import { InfoReservaService } from './info-reserva.service';


@Component({
  selector: 'app-info-reservas',
  templateUrl: './info-reservas.component.html',
  styleUrls: ['./info-reservas.component.css'],
  providers: [InfoReservaService]
})
export class InfoReservasComponent implements OnInit {

  private message: string;
  private dateInputFormControl;
  private dateOutputFormControl;
  private dateInfo: DatesInfoReserveModel;
  private minDateOutput: Date;
  private isValid: boolean;
  public listDataInfoReserve: Array<DataInfoReserveModel>;
  private numSelect: number;
  displayedColumns: string[] = ['name', 'dateInit', 'dateEnd', 'impor'];
  private dataSource;



  constructor(private infoReservaService:InfoReservaService) {
    this.dateInputFormControl = new FormControl('', [Validators.required]);
    this.dateOutputFormControl = new FormControl('', [Validators.required]);
    this.dateInfo = new DatesInfoReserveModel();
    this.dateInfo.dateInit = new Date();
    this.dateInfo.dateFinish = new Date();
    this.isValid = false;
    this.numSelect = 0;
    this.dataSource = new MatTableDataSource(this.listDataInfoReserve);
  }

  ngOnInit() {
    this.loadReserveInput();
  }

  public loadReserveInput(): void {
    this.infoReservaService.getReserveInput().subscribe(
      res => {
        this.listDataInfoReserve = res;
        this.dataSource.data = this.listDataInfoReserve;
        this.message = 'Entran hoy';
      },
      (error: any) => (this.listDataInfoReserve = [],
        this.dataSource.data = this.listDataInfoReserve,
        this.message = 'Entran hoy ---- Sin datos disponibles')
    );
  }

  public loadReserveOutput(): void {
    this.infoReservaService.getReserveOutput().subscribe(
      res => {
        this.listDataInfoReserve = res;
        this.dataSource.data = this.listDataInfoReserve;
        this.message = 'Salen hoy';
      },
      (error: any) => (this.listDataInfoReserve = [],
        this.dataSource.data = this.listDataInfoReserve,
        this.message = 'Salen hoy ---- Sin datos disponibles')
    );
  }

  public loadUserEstancia(): void {
    this.infoReservaService.getUserEstancia().subscribe(
      res => {
        this.listDataInfoReserve = res;
        this.dataSource.data = this.listDataInfoReserve;
        this.message = 'Clientes Hospedados';
      },
      (error: any) => (this.listDataInfoReserve = [],
        this.dataSource.data = this.listDataInfoReserve,
        this.message = 'Clientes Hospedados ---- Sin datos disponibles')
    );
  }

  public loadUserAsing(): void {
    this.infoReservaService.getUserAsing().subscribe(
      res => {
        this.listDataInfoReserve = res;
        this.dataSource.data = this.listDataInfoReserve;
        this.message = 'Clientes Sin asginar reserva';
      },
      (error: any) => (this.listDataInfoReserve = [],
        this.dataSource.data = this.listDataInfoReserve,
        this.message = 'Clientes Sin asginar reserva ---- Sin datos disponibles'),

    );
  }

  public loadListHsistoryReserveOk(): void {
    this.infoReservaService.getListHsistoryReserveOk(this.dateInfo).subscribe(
      res => {
        this.listDataInfoReserve = res;
        this.dataSource.data = this.listDataInfoReserve;

        this.message = 'Reservas realizadas   (' + this.infoReservaService.formatDate(this.dateInfo.dateInit)
        + ')  -  (' + this.infoReservaService.formatDate(this.dateInfo.dateFinish) + ')';
        this.numSelect = 1;
      },
      (error: any) => (this.listDataInfoReserve = [],
        this.dataSource.data = this.listDataInfoReserve,
        this.message = 'Reservas realizadas ---- Sin datos disponibles')
    );
  }



  public loadListHistoryReserveCancel(): void {
    this.infoReservaService.getListHistoryReserveCancel(this.dateInfo).subscribe(
      res => {
        this.listDataInfoReserve = res;
        this.dataSource.data = this.listDataInfoReserve;
        this.message = 'Reservas Canceladas   (' + this.infoReservaService.formatDate(this.dateInfo.dateInit)
        + ')  -  (' + this.infoReservaService.formatDate(this.dateInfo.dateFinish) + ')';
        this.numSelect = 2;
      },
      (error: any) => (this.listDataInfoReserve = [],
        this.dataSource.data = this.listDataInfoReserve,
        this.message = 'Reservas Canceladas ---- Sin datos disponibles')
    );
  }




  public setFilterDateMax(): void {
    this.minDateOutput = new Date(
      this.dateInfo.dateInit.getFullYear(),
      this.dateInfo.dateInit.getMonth(),
      this.dateInfo.dateInit.getDate() + 1
    );

    this.checkDate();
  }

  public checkDate(): void {
    if (this.dateInfo.dateInit < this.dateInfo.dateFinish) {
      if(this.numSelect === 1) {
        this.loadListHsistoryReserveOk();
      }else {
        this.loadListHistoryReserveCancel();
      }
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public onValid(){
    this.isValid = true;
  }

  public offValid(){
    this.isValid = false;
  }

  get getDateInfo() {
    return this.dateInfo;
  }

  get dateInputControl() {
    return this.dateInputFormControl;
  }

  get dateOutputControl() {
    return this.dateOutputFormControl;
  }

  get messageInfo() {
    return this.message;
  }

  get getMinDateOutput() {
    return this.minDateOutput;
  }

  get isValidDiv() {
    return this.isValid;
  }

  get dataSourceList() {
    return this.dataSource;
  }
}
