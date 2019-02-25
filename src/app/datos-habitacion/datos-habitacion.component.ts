import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  type: String;
  state: String;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hab001', type: 'sencilla', state: 'Ocupado', action: 0},
  {position: 2, name: 'Hab002', type: 'sencilla', state: 'Disponible',  action: 0},
  {position: 3, name: 'Hab003', type: 'sencilla', state: 'Ocupado',  action: 0},
  {position: 4, name: 'Hab004', type: 'sencilla', state: 'Ocupado',  action: 0},
  {position: 5, name: 'Hab005', type: 'sencilla', state: 'Disponible',  action: 0},
  {position: 6, name: 'Hab006', type: 'sencilla', state: 'limpieza',  action: 0},
  {position: 7, name: 'Hab007', type: 'sencilla', state: 'Ocupado',  action: 0},
];

@Component({
  selector: 'app-datos-habitacion',
  templateUrl: './datos-habitacion.component.html',
  styleUrls: ['./datos-habitacion.component.css']
})
export class DatosHabitacionComponent {

  displayedColumns: string[] = ['position', 'name', 'type', 'state', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
