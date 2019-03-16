import { Component, OnInit } from '@angular/core';
import { HabitacionModel } from '../model/HabitacionModel';
import { ReserveModel } from '../model/ReserveModel';
import { ReservaHabitacionService } from './reserva-habitacion.service';
import { UserModel } from '../model/UserModel';
import { TypeReserveModel } from '../model/TypeReserveModel';
import { FormControl, Validators } from '@angular/forms';
import { DetailReserveModel } from '../model/DetailReserveModel';
import { MatDialogRef } from '@angular/material';
import { OK } from '../model/httpStatus';
import { HabitacionDisponibleModel } from '../model/HabitacionDisponibleModel';

@Component({
  selector: 'app-reserva-habitacion',
  templateUrl: './reserva-habitacion.component.html',
  styleUrls: ['./reserva-habitacion.component.css'],
  providers: [ReservaHabitacionService]
})
export class ReservaHabitacionComponent implements OnInit {

  private numBeds: number[] = [1, 2, 3, 4, 5];
  private rooms: Array<HabitacionModel>;
  private roomAvailables: Array<HabitacionDisponibleModel>;
  private reserve: ReserveModel;
  private user: UserModel;
  private typeReserves: Array<TypeReserveModel>;
  private validDiv1:boolean;
  private validDiv2:boolean;
  private load:boolean;
  private disableComp: boolean;
  private detailReserve:DetailReserveModel;
  private roomFormControler;
  private roomAvailableFormControler;

  displayedColumns: string[] = ['idReserve', 'idClient',
   'deteInput', 'dateOutput', 'idTypeReserve', 'numBed', 'action'];

  constructor(private reserveRoomService: ReservaHabitacionService,
    public dialogRef: MatDialogRef<ReservaHabitacionComponent>,) {
    this.load = true;
    this.roomFormControler = new FormControl('', [Validators.required]);
    this.roomAvailableFormControler = new FormControl('', [Validators.required]);

    if (sessionStorage.getItem('reserveRoom')) {
      this.reserve = JSON.parse(sessionStorage.getItem( 'reserveRoom'));
    }
    console.log(this.reserve);

    this.validDiv1 = false;
    this.validDiv2 = false;
    this.disableComp = true;
    if(this.reserve.idTypeReserve === 1) {
    }else {
      console.log("se cumple tipo 2");
      this.validDiv1 = false;
      this.validDiv2 = true;
    }
    this.detailReserve = new DetailReserveModel();

   }

  ngOnInit() {
    if(this.reserve.idTypeReserve === 1) {
      this.loadRooms();
    }else{
      this.loadRoomsAvailable();
    }
  }


  private loadRooms(): void {
    this.reserveRoomService.getListIndividualAvailableRoom(this.reserve).subscribe(
      res => {
        this.rooms = res;
        this.validDiv1 = true;
        this.load = false;
      },
      (error: any) => (this.rooms = [])
    );
  }

  private loadRoomsAvailable(): void {
    this.reserveRoomService.getListSharedRoomAvailable(this.reserve).subscribe(
      res => {
        this.roomAvailables = res;
        console.log( this.roomAvailables );
        this.verefyNumberBed();
        this.validDiv2 = true;
        this.load = false;
      },
      (error: any) => (this.roomAvailables = [])
    );
  }

  private loadUser(): void {
    this.reserveRoomService.getReserveUser(this.reserve.idClient).subscribe(
      res => {
        this.user = res;
      },
      (error: any) => (this.user = new UserModel())
    );
  }

  private loadTypeReserve(): void {
    this.reserveRoomService.getTypeReserve().subscribe(
      res => {
        this.typeReserves = res;
        console.log(this.typeReserves);
      },
      (error: any) => (this.typeReserves = [])
    );
  }

  public getNameTypeReserve(): string {
    let name = '';
    this.typeReserves.forEach(type => {
      if( type.id === this.reserve.idTypeReserve) {
        name = type.nameType;
      }
  });
  return name;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public verefyNumberBed():void {
    let listAux = new Array<HabitacionDisponibleModel>();
    this.roomAvailables.forEach(element => {
      if(element.cantidad_disponible >= this.reserve.numBed) {
        listAux.push(element);
      }
    });

    this.roomAvailables = listAux;
  }

  public save(): void {
      this.load = true;
      this.detailReserve.idReserve = this.reserve.idReserve;
      this.reserve.idStateReserve = 2;
      this.reserveRoomService.saveOurUpdateDetail(this.detailReserve).subscribe(res => {
       if (res.responseCode === OK) {

       } else {
        alert("Tenemos problemas de conexion, intente mas tarde");
       }
      });

      this.reserveRoomService.saveOurUpdateReserve(this.reserve).subscribe(res => {
        if (res.responseCode === OK) {
         this.onNoClick();
        } else {
          alert("Tenemos problemas de conexion, intente mas tarde");
        }
       });

   }

  public getUser() {return this.user; }
  public getNumBedList() { return this.numBeds; }
  public getReserve() { return this.reserve; }
  public typeReserveList() { return this.typeReserves; }
  public isValidDiv1() {return this.validDiv1; }
  public isValidDiv2() {return this.validDiv2; }
  public getDetailReserve() { return this.detailReserve; }
  public getListRooms() { return this.rooms; }
  public getListRoomAvailable() { return this.roomAvailables; }
  public isLoad() { return this.load; }
  public getRoomControl() { return this.roomFormControler; }
  public getRoomAvailableControl() { return this.roomAvailableFormControler; }
  public isDesable() {return this.disableComp; }

}
