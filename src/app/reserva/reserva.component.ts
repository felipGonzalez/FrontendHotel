import { Component, OnInit } from '@angular/core';
import { ReserveModel } from 'src/app/model/ReserveModel';
import { StateReserveModel } from 'src/app/model/StateReserveModel';
import { ReservaService } from './reserva.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel';
import { UserService } from 'src/app/user/user.service';
import { MatTableDataSource } from '@angular/material';
import { OK } from 'src/app/model/httpStatus';
import { TypeReserveModel } from 'src/app/model/TypeReserveModel';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  providers: [ReservaService,UserService]
})
export class ReservaComponent implements OnInit {

  private reserves: Array<ReserveModel>;
  private stateReserves: Array<StateReserveModel>;
  private users: Array<UserModel>;
  private typeReserves: Array<TypeReserveModel>;
  private dataSource;
  private message: string;

  displayedColumns: string[] = ['idReserve', 'idClient', 'dateReserve',
   'idStateReserve', 'deteInput', 'dateOutput', 'idTypeReserve', 'numBed'];


  constructor(private reserveService: ReservaService,
    private userService: UserService,
    private router: Router) {
      this.dataSource = new MatTableDataSource(this.reserves);
      this.message = '';
     }

  ngOnInit() {
    this.loadTypeReserve();
    this.loadUsers();
    this.loadStateReserves();
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

  private loadTypeReserve(): void {
    this.reserveService.getTypeReserve().subscribe(
      res => {
        this.typeReserves = res;
        console.log(this.typeReserves);
      },
      (error: any) => (this.typeReserves = [])
    );
  }

  private loadStateReserves(): void {
    this.reserveService.getStateReserve().subscribe(res => {
      this.stateReserves = res;
    },
      (error: any)  => this.stateReserves = []
    );
  }

  public getNameUser(id: number):string {
    let name = '';
    this.users.forEach(user => {
      if(user.id === id) {
        name = user.firstName + '  ' + user.lastName;
      }
  });
  return name;
  }

  public getNameTypeReserve(id: number): string {
    let name = '';
    this.typeReserves.forEach(type => {
      if( type.id === id) {
        name = type.nameType;
      }
  });
  return name;

  }



  public saveOurUpdate(reserve: ReserveModel): void {
     this.reserveService.saveOurUpdate(reserve).subscribe(res => {
       if (res.responseCode === OK) {
         this.loadReserves();
       } else {
         this.message = res.message;

       }
      });
   }


  get reserveList(){return this.reserves; }
  get stateReserveList(){return this.stateReserves; }
  get dataSourceList() {return this.dataSource; }
  get typeReserveList() {return this.typeReserves; }
  get userList() { return this.users; }
  get getMessge() {return this.message; }

}
