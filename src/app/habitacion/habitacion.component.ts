import { Component, OnInit } from '@angular/core';
import { HabitacionModel } from 'src/app/model/HabitacionModel';
import { StateRoomModel } from 'src/app/model/StateRoomModel';
import { MatTableDataSource, MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HabitacionService } from './habitacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css'],
  providers: [HabitacionService]
})
export class HabitacionComponent implements OnInit {

  private rooms: Array<HabitacionModel>;
  private states: Array<StateRoomModel>;
  private dataSource;
  displayedColumns: string[] = [
    'id',
    'codeRoom',
    'capacityRoom',
    'stateRoom',
    'action'
  ];


  constructor(
    private roomService: HabitacionService,
    private router: Router,
  ) {
    sessionStorage.removeItem('room');
    this.dataSource = new MatTableDataSource(this.rooms);

   }

  ngOnInit() {
    this.loadStateRoom();
    this.loadRooms();
  }

  private loadStateRoom(): void {
    this.roomService.getState().subscribe(
      res => {
        this.states = res;

      },
      (error: any) => (this.states = [])
    );
  }
  private loadRooms(): void {
    this.roomService.getRoom().subscribe(
      res => {
        this.rooms = res;
        this.dataSource.data = this.rooms;

      },
      (error: any) => (this.rooms = [])
    );
  }

  public getTextStatus(id: number) {
    let text;
    this.states.forEach(function(element) {
      if (element.idState === id) {
        text = element.nameState;
      }
    });
    console.log(text);

    return text;
  }

  public getColorStatus(id: number) {
    let color;
    this.states.forEach(function(element) {
      if (element.idState === id) {
        color = element.colorState;
      }
    });
    console.log(color);

    return color;
  }

  public edit(room: HabitacionModel): void {
    sessionStorage.setItem('room', JSON.stringify(room));
    this.router.navigate(['/crearHabitacion']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get roomList() {
    return this.rooms;
  }
  get statesList() {
    return this.states;
  }

  get dataSourceList() {
    return this.dataSource;
  }



}
