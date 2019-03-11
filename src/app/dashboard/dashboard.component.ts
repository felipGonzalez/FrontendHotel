import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { DataInfoReserveModel } from '../model/DataInfoReserveModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  public title = 'Informacion del día ';
  public dateDay = new Date();
  public numberClientInput: number;
  public numberClientOutput: number;
  public numberClient: number;
  public numberRoom: number;
  public numberRoomTotal: number;
  public listDataInfoReserve: Array<DataInfoReserveModel>;


  constructor(private dashboardService: DashboardService) {
    this.numberClient = 0;
    this.numberClientInput = 0;
    this.numberClientOutput = 0;
    this.numberRoom = 0;
    this.numberRoomTotal = 0;
  }

  ngOnInit() {
    this.loadNumberClient();
    this.loadNumberClientInput();
    this.loadNumberClientOutput();
    this.loadNumberRoom();
    this.loadNumberRoomTotal();
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
        console.log(this.numberClient);

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
}
