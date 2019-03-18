import { Component, OnInit } from '@angular/core';
import { CreateStateRoomService } from './create-state-room.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { StateRoomModel } from 'src/app/model/StateRoomModel';
import { OK } from 'src/app/model/httpStatus';

@Component({
  selector: 'app-create-steate-room',
  templateUrl: './create-steate-room.component.html',
  styleUrls: ['./create-steate-room.component.css']
})
export class CreateSteateRoomComponent implements OnInit {

  private message: string;
  private nameFormControl;
  private descFormControl;
  private isValid: boolean;
  private stateRoom: StateRoomModel;
  private colors: string[] = ['#e40000', '#9b88b5', '#f5c447', '#4fbd61', '#000000', '#dddddd', '#337ab7', '#ec971f', '#3f51b5'];

  constructor(
    private createStateRoomService: CreateStateRoomService,
    private router: Router) {
      if (sessionStorage.getItem('stateRoom')) {
        this.stateRoom = JSON.parse(sessionStorage.getItem('stateRoom'));
        console.log(this.stateRoom);
      } else {
        this.stateRoom = new StateRoomModel();
        console.log(this.stateRoom + "no hay datos");
      }

      this.message = '';
      this.nameFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]);
      this.descFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]);
    this.isValid = true;
    }

  ngOnInit() {
  }

  public saveOurUpdate(): void {
    this.isValid = this.createStateRoomService.validate(this.stateRoom);
    console.log(this.isValid);
    if (this.isValid) {
       this.createStateRoomService.saveOurUpdate(this.stateRoom).subscribe(res => {
       if (res.responseCode === OK) {
         console.log(res.responseCode);

        this.router.navigate(['/estadoHabitacion']);
       } else {
         this.message = res.message;
         this.isValid = false;
       }
      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
   }

   public restrictext(e) {
    let input;
    input = String.fromCharCode(e.which);
    return !!/[\D]/.test(input);
  }


  get messageInfo() {
    return this.message;
  }
  get nameControl() {
    return this.nameFormControl;
  }
  get valid() {
    return this.isValid;
  }

  get descControl() {
    return this.descFormControl;
  }

  get stateActually() {
    return this.stateRoom;
  }

  get colorList() {
    return this.colors;
  }


}
