import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DataInfoReserveModel } from 'src/app/model/DataInfoReserveModel';
import { InfoReservaService } from '../info-reservas/info-reserva.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService,InfoReservaService]
})
export class DashboardComponent implements OnInit {
  public title = 'Informacion del día ';
  public dateDay = new Date();
  public numberClientInput: number;
  public numberClientOutput: number;
  public numberClient: number;
  public numberRoom: number;
  public numberRoomTotal: number;
  private dataSource;
  private dataSource2;

  private isValid1: boolean;
  private isValid2: boolean;
  private message1: string;
  private message2: string;
  public listDataInforInput: Array<DataInfoReserveModel>;
  public listDataInforOutput: Array<DataInfoReserveModel>;

  displayedColumns: string[] = ['name', 'dateInit', 'dateEnd', 'impor'];

  constructor(private dashboardService: DashboardService,
    private infoReservaService:InfoReservaService) {
    this.numberClient = 0;
    this.numberClientInput = 0;
    this.numberClientOutput = 0;
    this.numberRoom = 0;
    this.numberRoomTotal = 0;
    this.isValid1= true;
    this.isValid2= true;
    this.dataSource = new MatTableDataSource(this.listDataInforInput);
    this.dataSource2 = new MatTableDataSource(this.listDataInforOutput);
  }

  ngOnInit() {
    this.loadNumberClientInput();
    this.loadNumberClientOutput();
    this.loadNumberRoom();
    this.loadNumberClient();
    this.loadNumberRoomTotal();
    this.loadReserveInput();
    this.loadReserveOutput();
  }

  private loadNumberClientInput(): void {
    this.dashboardService.getNumberClientInput().subscribe(
      res => {
        this.numberClientInput = res;
      },
      (error: any) => (this.numberClientInput = 0)
    );
  }

  private loadNumberClientOutput(): void {
    this.dashboardService.getNumberClientOutput().subscribe(
      res => {
        this.numberClientOutput = res;
      },
      (error: any) => (this.numberClientOutput = 0)
    );
  }

  private loadNumberClient(): void {
    this.dashboardService.getNumberClient().subscribe(
      res => {
        this.numberClient = res;
        },
      (error: any) => (this.numberClient = 0)
    );
  }

  private loadNumberRoom(): void {
    this.dashboardService.getNumberRoom().subscribe(
      res => {
        this.numberRoom = res;
      },
      (error: any) => (this.numberRoom = 0)
    );
  }

  private loadNumberRoomTotal(): void {
    this.dashboardService.getNumberRoomTotal().subscribe(
      res => {
        this.numberRoomTotal = res;
      },
      (error: any) => (this.numberRoomTotal = 0)
    );
  }

  public loadReserveInput(): void {
    this.infoReservaService.getReserveInput().subscribe(
      res => {
        this.listDataInforInput = res;
        this.dataSource.data = this.listDataInforInput;
        if(this.listDataInforInput.length != 0) {
          this.isValid1 = false;
        }


      },
      (error: any) => (this.listDataInforInput = [],
        this.isValid1 = true)
    );
  }

  public loadReserveOutput(): void {
    this.infoReservaService.getReserveOutput().subscribe(
      res => {
        this.listDataInforOutput = res;
        this.dataSource2.data = this.listDataInforOutput;
        if(this.listDataInforOutput.length != 0) {
          this.isValid2 = false;
        }

      },
      (error: any) => (this.listDataInforOutput = [],
        this.isValid2 = true)

    );
  }

  public getFormatDate(date: Date): Date {
    var dateAux: Date;
    var date1 = new Date(date)
    dateAux = new Date(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate() +2
    );
    return dateAux;
  }

  applyFilter1(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter2(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

  get dataSourceList() {
    return this.dataSource;
  }

  get dataSourceList2() {
    return this.dataSource2;
  }

  get messageInfo1() {
    return this.message1;
  }

  get messageInfo2() {
    return this.message2;
  }

  get isValidDiv1() {
    return this.isValid1;
  }

  get isValidDiv2() {
    return this.isValid2;
  }
}
