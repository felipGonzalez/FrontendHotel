import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDatepickerInputEvent } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CreateTipoReservaService } from '../create-tipo-reserva/create-tipo-reserva.service';
import { NuevaReservaService } from './nueva-reserva.service';
import { TypeReserveModel } from '../model/typeReserveModel';
import { ReserveModel } from '../model/ReserveModel';
import { StateReserveModel } from '../model/StateReserveModel';
import { TypeDocument } from '../model/TypeDocument';
import { CreateUserService } from '../create-user/create-user.service';
import { UserModel } from '../model/UserModel';
import { OK,NOT_ACCEPTABLE } from '../model/httpStatus';


@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css'],
  providers: [CreateTipoReservaService,NuevaReservaService,CreateUserService]
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
  private validDiv4: boolean;
  private validForm: boolean;
  private existUser: boolean;
  private typeReserves: Array<TypeReserveModel>;
  private typeReserveFormControl;
  private reserve: ReserveModel;
  private selectFormControl;
  private numBedFormControl;
  private stateReserves: Array<StateReserveModel>;
  private numBeds: number[] = [1, 2, 3, 4, 5];
  private disableSelect: boolean;
  private emailFormControl;
  private userFromControl;
  private typeDocuments: Array<TypeDocument>;
  private  user: UserModel;
  private nameFormControl;
  private lastNameFormControl;
  private documentFormControl;
  private phoneFormControl;

  constructor(
    public dialogRef: MatDialogRef<NuevaReservaComponent>,
    private router: Router,
    private tipeReserveService:CreateTipoReservaService ,
    private newReserveService: NuevaReservaService,
    private createUserService: CreateUserService
  ) {
    this.validDate = true;
    this.dateSelectOutput = new Date();
    this.dateInputFormControl = new FormControl('',[Validators.required]);
    this.dateOutputFormControl = new FormControl('',[Validators.required]);
    this.nameFormControl = new FormControl('',[Validators.required]);
    this.lastNameFormControl = new FormControl('',[Validators.required]);
    this.documentFormControl = new FormControl('',[Validators.required]);
    this.phoneFormControl = new FormControl('',[Validators.required]);
    this.dateSelectInput = new Date();
    this.validDate = true;
    this.disableSelect = true;
    this.validDiv1 = false;
    this.validDiv2 = false;
    this.validDiv3 = true;
    this.validDiv4 = false;
    this.validForm = true;
    this.existUser = false;
    this.reserve = new ReserveModel();
    this.reserve.dateReserve = new Date();
    this.selectFormControl = new FormControl('', Validators.required);
    this.numBedFormControl = new FormControl('', Validators.required);
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.userFromControl = new FormControl('', [Validators.required]);
    this.user = new UserModel;
  }

  ngOnInit() {
    this.setFilterDateMin();
    this.setFilterDateMaxInit();
    this.loadTypeReserve();
    this.loadStateReserve();
    this.loadTypeDocument();
  }

  private loadStateReserve(): void {
    this.tipeReserveService.getTypeReserve().subscribe(
      res => {
        this.typeReserves = res;
      },
      (error: any) => (this.typeReserves = [])
    );
  }

  private loadTypeReserve(): void {
    this.newReserveService.getStateReserve().subscribe(
      res => {
        this.stateReserves = res;
      },
      (error: any) => (this.stateReserves = [])
    );
  }

  private loadTypeDocument(): void {
    this.createUserService.getTypeDocument().subscribe(res => {
      this.typeDocuments = res;
      console.log(this.typeDocuments);
    },
      (error: any)  => this.typeDocuments = []
    );
  }

  public setFilterDateMin(): void{

     this.minDateInput = new  Date ( this.dateInpuFilter.getFullYear() , this.dateInpuFilter.getMonth() , (this.dateInpuFilter.getDate()) );
     this.maxDateInput = new  Date (this.dateInpuFilter.getFullYear() , this.dateInpuFilter.getMonth(), this.dateInpuFilter.getDate()+20);
  }

  public setFilterDateMaxInit(): void{
    this.minDateOutput = new  Date ( this.dateInpuFilter.getFullYear() ,
     this.dateSelectInput.getMonth() , this.dateInpuFilter.getDate() + 1 );
    this.maxDateoutput = new  Date (this.dateInpuFilter.getFullYear() ,
     this.dateSelectInput.getMonth(), this.dateInpuFilter.getDate() + 20);

 }

  public setFilterDateMax(): void{
    console.log(this.reserve.deteInput.getFullYear()+ '  ' + this.reserve.deteInput.getMonth()+ '  '
    + this.reserve.deteInput.getDate());

     this.minDateOutput = new  Date ( this.reserve.deteInput.getFullYear(),
      this.reserve.deteInput.getMonth() , this.reserve.deteInput.getDate() + 1 );
     this.maxDateoutput = new  Date (this.reserve.deteInput.getFullYear(),
      this.reserve.deteInput.getMonth(), this.reserve.deteInput.getDate() + 20);
      this.checkDate();
  }

  public checkDate(): void {
    if( this.reserve.deteInput < this.reserve.dateOutput) {
        this.validDiv1 = true;
    }
  }

  public setNumBed() {
    this.validDiv2 = true;
    if(this.reserve.idTypeReserve === 2) {
      this.reserve.numBed = 1;
      this.disableSelect = false;
    } else {
      this.reserve.numBed = 5;
      this.disableSelect = true;
    }
    this.validDiv3 = true;
  }

  public checkUser() {
    if(this.createUserService.isValidDocument(this.user.document)){
      this.createUserService.verifyUser(this.user.document).subscribe(res => {
        if ( res.responseCode === OK) {
          console.log(res.message);
           this.existUser = false;
        } else if(res.responseCode === NOT_ACCEPTABLE){
          console.log(res.message);
          this.existUser = true;
        }
      },
        (error: any)  => 'No hay conexión'
      );
    }


  }


   onNoClick(): void {
    this.dialogRef.close();
    //this.router.navigate(['/']);
  }

  get typeReserveControl() {
    return this.typeReserveFormControl;
  }

  get nameControl() {
    return this.nameFormControl;
  }

  get lastNameControl() {
    return this.lastNameFormControl;
  }

  get documentControl() {
    return this.documentFormControl;
  }

  get phoneControl() {
    return this.phoneFormControl;
  }
  get typeResrveList() {
    return this.typeReserves;
  }

  get messageInfo() {
    return this.message;
  }

  get isValid() {
    return this.validDate;
  }

  get isValidForm() {
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

  get isValidDiv4() {
    return this.validDiv4;
  }

  get getExistUser() {
    return this.existUser;
  }



  get dateInputControl() {
    return this.dateInputFormControl;
  }

  get dateOutputControl() {
    return this.dateOutputFormControl;
  }

  get getMinDateInput(){
    return this.minDateInput ;
  }

  get getMaxDateInput(){
    return this.maxDateInput ;
  }

  get getMinDateOutput(){
    return this.minDateOutput ;
  }

  get getMaxDateoutput(){
    return this.maxDateoutput ;
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

  get emailControl() {
    return this.emailFormControl;
  }

  get userControl() {
    return this.userFromControl;
  }

  get getNumBedList() {
    return this.numBeds;
  }

  get userActually() {return this.user; }
  get typeDocumentList() {return this.typeDocuments; }

}
