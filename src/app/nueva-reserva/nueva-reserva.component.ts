import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { CreateTipoReservaService } from 'src/app/create-tipo-reserva/create-tipo-reserva.service';
import { NuevaReservaService } from './nueva-reserva.service';
import { TypeReserveModel } from 'src/app/model/TypeReserveModel';
import { ReserveModel } from 'src/app/model/ReserveModel';
import { StateReserveModel } from 'src/app/model/StateReserveModel';
import { TypeDocument } from 'src/app/model/TypeDocument';
import { CreateUserService } from 'src/app/create-user/create-user.service';
import { UserModel } from 'src/app/model/UserModel';
import { OK, NOT_ACCEPTABLE } from 'src/app/model/httpStatus';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css'],
  providers: [CreateTipoReservaService, NuevaReservaService, CreateUserService]
})
export class NuevaReservaComponent implements OnInit {
  private message: string;
  private validDate: boolean;
  private dateInpuFilter = new Date();
  private minDateInput: Date;
  private maxDateInput: Date;
  private minDateOutput: Date;
  private maxDateoutput: Date;
  private dateInputFormControl;
  private dateOutputFormControl;
  private dateSelectInput: Date;
  private dateSelectOutput: Date;
  private validDiv1: boolean;
  private validDiv2: boolean;
  private validDiv3: boolean;
   private validForm: boolean;
  private typeReserves: Array<TypeReserveModel>;
  private typeReserveFormControl;
  private reserve: ReserveModel;
  private selectFormControl;
  private numBedFormControl;
  private stateReserves: Array<StateReserveModel>;
  private numBeds: number[] = [1, 2, 3, 4, 5];
  private disableSelect: boolean;

  private user: UserModel;

  isLinear: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;


  private users: Array<UserModel>;
  private dataSource;
  private domainsList: string[] = ['M', 'F', 'I', 'N'];


  displayedColumns: string[] = ['firstName', 'lastName', 'document', 'phone', 'city', 'action'];

  constructor(
    public dialogRef: MatDialogRef<NuevaReservaComponent>,
    private router: Router,
    private tipeReserveService: CreateTipoReservaService,
    private newReserveService: NuevaReservaService,
    private createUserService: CreateUserService,
    private _formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.validDate = true;
    this.dateSelectOutput = new Date();
    this.dateInputFormControl = new FormControl('', [Validators.required]);
    this.dateOutputFormControl = new FormControl('', [Validators.required]);
    this.dateSelectInput = new Date();

    this.disableSelect = false;
    this.validDiv1 = false;
    this.validDiv2 = false;
    this.validDiv3 = false;
    this.isLinear = true;
    this.validForm = true;

    this.reserve = new ReserveModel();
    this.reserve.dateReserve = new Date();
    this.reserve.idTypeReserve = 0;
    this.reserve.idStateReserve = 1;
    this.selectFormControl = new FormControl('', Validators.required);
    this.numBedFormControl = new FormControl('', Validators.required);

    this.user = new UserModel();
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.threeFormGroup = this._formBuilder.group({
      threeCtrl: ['', Validators.required]
    });
    this.setFilterDateMin();
    this.setFilterDateMaxInit();
    this.loadTypeReserve();
    this.loadStateReserve();
    this.loadUsers();
  }

  private loadTypeReserve(): void {
    this.tipeReserveService.getTypeReserve().subscribe(
      res => {
        this.typeReserves = res;
      },
      (error: any) => (this.typeReserves = [])
    );
  }

  private loadStateReserve(): void {
    this.newReserveService.getStateReserve().subscribe(
      res => {
        this.stateReserves = res;
      },
      (error: any) => (this.stateReserves = [])
    );
  }

  public setFilterDateMin(): void {
    this.minDateInput = new Date(
      this.dateInpuFilter.getFullYear(),
      this.dateInpuFilter.getMonth(),
      this.dateInpuFilter.getDate()
    );
    this.maxDateInput = new Date(
      this.dateInpuFilter.getFullYear(),
      this.dateInpuFilter.getMonth(),
      this.dateInpuFilter.getDate() + 20
    );
  }

  public setFilterDateMaxInit(): void {
    this.minDateOutput = new Date(
      this.dateInpuFilter.getFullYear(),
      this.dateSelectInput.getMonth(),
      this.dateInpuFilter.getDate() + 1
    );
    this.maxDateoutput = new Date(
      this.dateInpuFilter.getFullYear(),
      this.dateSelectInput.getMonth(),
      this.dateInpuFilter.getDate() + 20
    );
  }

  public setFilterDateMax(): void {
    this.minDateOutput = new Date(
      this.reserve.deteInput.getFullYear(),
      this.reserve.deteInput.getMonth(),
      this.reserve.deteInput.getDate() + 1
    );
    this.maxDateoutput = new Date(
      this.reserve.deteInput.getFullYear(),
      this.reserve.deteInput.getMonth(),
      this.reserve.deteInput.getDate() + 20
    );
    this.checkDate();
  }

  public checkDate(): void {
    if (this.reserve.deteInput < this.reserve.dateOutput) {
      this.validDiv1 = true;
      this.isLinear = false;
    }
  }

  public setNumBed() {
    this.validDiv2 = true;

    if(this.reserve.numBed != null) {
      this.validDiv3 = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/createUserComponent']);

  }


  private loadUsers(): void {
    this.userService.getUser().subscribe(
      res => {
        this.users = res;
        this.dataSource.data = this.users;
      },
      (error: any) => (this.users = [])
    );
  }

  public edit(user: UserModel): void {
    //sessionStorage.setItem('user', JSON.stringify(user));
    //this.router.navigate(['/createUserComponent']);
    this.user = user;
    this.validDiv3 = true;
    this.isLinear = false;
    this.reserveActually.idClient = user.id;
    console.log(this.typeReserves);

  }

  public validData():boolean {
    let da = this.newReserveService.validate(this.reserve);
    console.log(da);

    return da;
  }

  public saveOurUpdate(): void {
    this.validForm = this.newReserveService.validate(this.reserve);

    console.log(this.reserve);

    if (this.validForm) {
       this.newReserveService.saveOurUpdate(this.reserve).subscribe(res => {
       if (res.responseCode === OK) {
         alert('Reserva Agregada Correctamente');
        this.dialogRef.close();
       } else {
         this.message = res.message;
         this.validForm = false;
         console.log(res.message);
       }
      });
    } else {
      this.message = 'Verifique la fecha y el tipo de reserva por favor';
    }
   }

   applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getNameTypeReserve():string {
    return this.typeReserves[this.reserveActually.idTypeReserve].nameType;
  }

  get dataSourceList() {return this.dataSource; }
  get userList() { return this.users; }
  get genderDomain() {return this.domainsList; }

  get typeReserveControl() {
    return this.typeReserveFormControl;
  }

  get typeReserveList() {
    return this.typeReserves;
  }

  get messageInfo() {
    return this.message;
  }

  get isValid() {
    return this.validForm;
  }

   get isDisable() {
    return this.disableSelect;
  }

  get isValidDiv1() {
    return this.validDiv1;
  }

  get isValidDiv2() {
    return this.validDiv2;
  }

  get isValidDiv3() {
    return this.validDiv3;
  }

  get dateInputControl() {
    return this.dateInputFormControl;
  }

  get dateOutputControl() {
    return this.dateOutputFormControl;
  }

  get getMinDateInput() {
    return this.minDateInput;
  }

  get getMaxDateInput() {
    return this.maxDateInput;
  }

  get getMinDateOutput() {
    return this.minDateOutput;
  }

  get getMaxDateoutput() {
    return this.maxDateoutput;
  }

  get getDateSelectInput() {
    return this.dateSelectInput;
  }

  get getDateSelectOutput() {
    return this.dateSelectOutput;
  }

  get reserveActually() {
    return this.reserve;
  }

  get selectControl() {
    return this.selectFormControl;
  }

  get numBedControl() {
    return this.numBedFormControl;
  }

  get getNumBedList() {
    return this.numBeds;
  }

  get userActually() {
    return this.user;
  }
}
