import { Component, OnInit } from '@angular/core';
import { HabitacionModel } from 'src/app/model/HabitacionModel';
import { StateRoomModel } from 'src/app/model/StateRoomModel';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateHabitacionService } from './create-habitacion.service';
import { OK } from 'src/app/model/httpStatus';

@Component({
  selector: 'app-create-habitacion',
  templateUrl: './create-habitacion.component.html',
  styleUrls: ['./create-habitacion.component.css']
})
export class CreateHabitacionComponent implements OnInit {

  private message: string;
  private codeFormControl;
  private selectFormControl;
  private capacityFormControl;
  private isValid: boolean;
  private room: HabitacionModel;
  private states: Array<StateRoomModel>;


  constructor(
    private createRoomService: CreateHabitacionService,
    private router: Router
  ) {
    if (sessionStorage.getItem('room')) {
      this.room = JSON.parse(sessionStorage.getItem('room'));
      } else {
      this.room = new HabitacionModel();
    }
    this.message = '';
    this.codeFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]);
    this.capacityFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ]);

    this.selectFormControl = new FormControl('', Validators.required);
    this.isValid = true;
  }

  ngOnInit() {
    this.loadStateRoom();
  }

  private loadStateRoom(): void {
    this.createRoomService .getStateRoom().subscribe(
      res => {
        this.states = res;
      },
      (error: any) => (this.states = [])
    );
  }

  public saveOurUpdate(): void {
    this.isValid = this.createRoomService.validate(this.room);
    console.log(this.isValid);

    if (this.isValid) {
       this.createRoomService.saveOurUpdate(this.room).subscribe(res => {
       if (res.responseCode === OK) {
         console.log(res.responseCode);

        this.router.navigate(['/habitacion']);
       } else {
         this.message = res.message;
         this.isValid = false;
       }
      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
   }


  get messageInfo() {
    return this.message;
  }
  get codeControl() {
    return this.codeFormControl;
  }
  get valid() {
    return this.isValid;
  }
  get roomActually() {
    return this.room;
  }
  get stateList() {
    return this.states;
  }
  get capacityControl() {
    return this.capacityFormControl;
  }

  get selectControl() {
    return this.selectFormControl;
  }

}
