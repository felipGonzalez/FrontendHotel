import { Component, OnInit } from "@angular/core";
import { ReserveModel } from "src/app/model/ReserveModel";
import { StateReserveModel } from "src/app/model/StateReserveModel";
import { ReservaService } from "./reserva.service";
import { Router } from "@angular/router";
import { UserModel } from "src/app/model/UserModel";
import { UserService } from "src/app/user/user.service";
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  TooltipPosition
} from "@angular/material";
import { OK } from "src/app/model/httpStatus";
import { TypeReserveModel } from "src/app/model/TypeReserveModel";
import { ReservaHabitacionComponent } from "src/app/reserva-habitacion/reserva-habitacion.component";

@Component({
  selector: "app-reserva",
  templateUrl: "./reserva.component.html",
  styleUrls: ["./reserva.component.css"],
  providers: [ReservaService, UserService]
})
export class ReservaComponent implements OnInit {
  private reserves: Array<ReserveModel>;
  private reservesNotAssing: Array<ReserveModel>;
  private stateReserves: Array<StateReserveModel>;
  private users: Array<UserModel>;
  private typeReserves: Array<TypeReserveModel>;
  private dataSource;
  private dataSourceNotAssing;
  private message: string;
  public reserveAux: ReserveModel;
  private validDiv: boolean;
  private cost: number;
  positionOptions: TooltipPosition = 'above';

  displayedColumns: string[] = [
    "idReserve",
    "idClient",
    "dateReserve",
    "idStateReserve",
    "deteInput",
    "dateOutput",
    "idTypeReserve",
    "numBed",
    "action"
  ];

  displayedColumns2: string[] = [
    "idReserve",
    "idClient",
    "phone",
    "dateReserve",
    "idStateReserve",
    "deteInput",
    "dateOutput",
    "idTypeReserve",
    "numBed",
    "action"
  ];

  constructor(
    private reserveService: ReservaService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.reserves);
    this.dataSourceNotAssing = new MatTableDataSource(this.reservesNotAssing);
    this.message = "";
    this.validDiv = false;
    this.cost =0;
  }

  ngOnInit() {
    this.loadTypeReserve();
    this.loadUsers();
    this.loadStateReserves();
    this.loadReserveNotAssing();
    this.loadReserves();
  }

  private loadUsers(): void {
    this.userService.getUser().subscribe(
      res => {
        this.users = res;
      },
      (error: any) => (this.users = [])
    );
  }

  private loadReserves(): void {
    this.reserveService.getReserveList().subscribe(
      res => {
        this.reserves = res;
        this.dataSource.data = this.reserves;
      },
      (error: any) => (this.reserves = [])
    );
  }

  private loadReserveNotAssing(): void {
    this.reserveService.getReserveNotAssign().subscribe(
      res => {
        this.reservesNotAssing = res;
        this.dataSourceNotAssing.data = this.reservesNotAssing;
        this.validDiv = true;
      },
      (error: any) => (this.reservesNotAssing = [])
    );
  }

  private loadTypeReserve(): void {
    this.reserveService.getTypeReserve().subscribe(
      res => {
        this.typeReserves = res;
      },
      (error: any) => (this.typeReserves = [])
    );
  }

  private loadStateReserves(): void {
    this.reserveService.getStateReserve().subscribe(
      res => {
        this.stateReserves = res;
        this.stateReserves.shift();
        this.stateReserves.pop();
      },
      (error: any) => (this.stateReserves = [])
    );
  }

   private loadCostReserve(reserve: ReserveModel){
      this.reserveService.getCosReserve(reserve.idReserve).subscribe(
      res => {
        sessionStorage.setItem("userBill", JSON.stringify(this.getUser(reserve.idClient)));
        sessionStorage.setItem("reserveBill", JSON.stringify(reserve));
        sessionStorage.setItem("reserveType",JSON.stringify(this.getTypeReserve(reserve.idTypeReserve)));
        sessionStorage.setItem("costReserve", res.toString());
        const dialogRef = this.dialog.open(ModalBill, {
        width: "800px"
       });
    dialogRef.afterClosed().subscribe(result => {
      reserve = JSON.parse(sessionStorage.getItem("reserveBill"));;
      this.saveOurUpdate(reserve);
    });
     }
    );
   }

  public getNameUser(id: number): string {
    let name = "";
    this.users.forEach(user => {
      if (user.id === id) {
        name = user.firstName + "  " + user.lastName;
      }
    });
    return name;
  }

  public getPhoneUser(id: number): string {
    let phone = "";
    this.users.forEach(user => {
      if (user.id === id) {
        phone = user.phone;
      }
    });
    return phone;
  }

  public getUser(idClient: number): UserModel {
    for (var _i = 0; _i < this.users.length; _i++) {
      let user: UserModel = this.users[_i];
      if(user.id === idClient) {
        return user;
      }
  }
    return new UserModel();
  }

  public getTypeReserve(idType: number): TypeReserveModel {
    for (var _i = 0; _i < this.typeReserves.length; _i++) {
      let type: TypeReserveModel = this.typeReserves[_i];
      if(type.id === idType) {
        return type;
      }
  }
    return new TypeReserveModel();
  }

  public getNameTypeReserve(id: number): string {
    let name = "";
    this.typeReserves.forEach(type => {
      if (type.id === id) {
        name = type.nameType;
      }
    });
    return name;
  }

  public setReserveAux(reserve: ReserveModel) {
    this.reserveAux = reserve;
  }

  public cancelReserve(): void {
    this.reserveAux.idStateReserve = 4;
    this.saveOurUpdate(this.reserveAux);
  }

  public saveOurUpdate(reserve: ReserveModel): void {
    this.reserveService.saveOurUpdate(reserve).subscribe(res => {
      if (res.responseCode === OK) {
        this.loadReserves();
        this.loadReserveNotAssing();
      } else {
        this.message = res.message;
      }
    });
  }

  public formatDate(date1: Date): string {
    let date = new Date(date1.toString());

    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }

  onEdit(reserve: ReserveModel): void {
    sessionStorage.setItem("reserveRoom", JSON.stringify(reserve));
    const dialogRef = this.dialog.open(ReservaHabitacionComponent, {
      width: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadReserveNotAssing();
      this.loadReserves();
    });
  }

  openDialog(reserve: ReserveModel): void {
    this.loadCostReserve(reserve);

  }


  public getFormatDate(date: Date): Date {
    var dateAux: Date;
    var date1 = new Date(date)
    dateAux = new Date(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate() +1
    );
   return dateAux;
  }

  get reserveList() {
    return this.reserves;
  }
  get reserveNotAssingList() {
    return this.reservesNotAssing;
  }
  get stateReserveList() {
    return this.stateReserves;
  }
  get dataSourceList() {
    return this.dataSource;
  }
  get dataSourceNotAssingList() {
    return this.dataSourceNotAssing;
  }
  get typeReserveList() {
    return this.typeReserves;
  }
  get userList() {
    return this.users;
  }
  get getMessge() {
    return this.message;
  }
  get isValidDiv() {
    return this.validDiv;
  }

}


@Component({
  selector: "facturacion-modal",
  templateUrl: "facturacion-modal.html",
  styleUrls: ["facturacion-modal.css"]
})
export class ModalBill implements OnInit {
  private user: UserModel;
  private reserve: ReserveModel;
  private date: Date;
  private typeReserve: TypeReserveModel;
  private constReserve:string;

  constructor(public dialogRef: MatDialogRef<ModalBill>) {
    if (sessionStorage.getItem("userBill")) {
      this.user = JSON.parse(sessionStorage.getItem("userBill"));

    }

    if (sessionStorage.getItem("reserveBill")) {
      this.reserve = JSON.parse(sessionStorage.getItem("reserveBill"));

    }

    if (sessionStorage.getItem("reserveType")) {
      this.typeReserve = JSON.parse(sessionStorage.getItem("reserveType"));

    }
    if(sessionStorage.getItem("costReserve")) {
      this.constReserve = sessionStorage.getItem("costReserve");
    }

    this.date = new Date;

    console.log(this.user);
    console.log(this.reserve);
    console.log(this.typeReserve);

  }

  ngOnInit() {}

  onNoClick(): void {

    this.dialogRef.close();

  }

  onNoClickSave(): void {
    this.reserve.idStateReserve = 5;
    sessionStorage.setItem("reserveBill", JSON.stringify(this.reserve));
    this.dialogRef.close();
  }

  get getDate() {
    return this.date;
  }

  get getUser() {
    return this.user;
  }

  get getReserve() {
    return this.reserve;
  }

  get getTypeReserve() {
    return this.typeReserve;
  }

  get getCostReserve() {
    return this.constReserve;
  }
}
