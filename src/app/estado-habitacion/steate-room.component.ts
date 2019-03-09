import { Component, OnInit } from '@angular/core';
import { StateRoomModel } from '../model/StateRoomModel';
import { StateRoomService } from './state-room.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-steate-room',
  templateUrl: './steate-room.component.html',
  styleUrls: ['./steate-room.component.css'],
  providers: [StateRoomService]
})
export class SteateRoomComponent implements OnInit {

  private statesRooms: Array<StateRoomModel>;
  displayedColumns: string[] = [
    'name',
    'color',
    'desc',
    'action'
  ];
  private dataSource;

  constructor(
    private router: Router,
    private stateRoomService: StateRoomService
  ) {
    sessionStorage.clear();
    this.dataSource = new MatTableDataSource(this.statesRooms);

  }

  ngOnInit() {
    this.loadStateRoom();
  }

  private loadStateRoom(): void {
    this.stateRoomService.getState().subscribe(
      res => {
        this.statesRooms = res;
        this.dataSource.data = this.statesRooms;

      },
      (error: any) => (this.statesRooms = [])
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public edit(stateRoom: StateRoomModel): void {
    console.log("Entro a editar");

    sessionStorage.setItem('stateRoom', JSON.stringify(stateRoom));
    this.router.navigate(['/crearEstadoHabitacion']);
  }

  get dataSourceList() { return this.dataSource; }

  get stateRoomList() {return this.statesRooms;}

}
