import { Component, OnInit } from '@angular/core';
import { TypeReserveModel } from 'src/app/model/TypeReserveModel';

import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';
import { CreateTipoReservaService } from './create-tipo-reserva.service';
import { OK } from 'src/app/model/httpStatus';

@Component({
  selector: 'app-create-tipo-reserva',
  templateUrl: './create-tipo-reserva.component.html',
  styleUrls: ['./create-tipo-reserva.component.css'],
})
export class CreateTipoReservaComponent implements OnInit {

  private message: string;
  private isValid: boolean;
  private nameFormControl;
  private priceFormControl;
  private typeReserve: TypeReserveModel;



  constructor(
    private createTypeReserve: CreateTipoReservaService,
    private router: Router) {
      this.message = '';
      this.isValid = true;
      if (sessionStorage.getItem('typeReserve')) {
        this.typeReserve = JSON.parse(sessionStorage.getItem('typeReserve'));
        console.log(this.typeReserve);
      } else {
        this.typeReserve = new TypeReserveModel();
      }

      this.nameFormControl = new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]);

      this.priceFormControl = new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]);

  }

  ngOnInit() {
   }

   public saveOurUpdate(): void {
    this.isValid = this.createTypeReserve.validate(this.typeReserve);
    console.log(this.isValid);

    if (this.isValid) {
       this.createTypeReserve.saveOurUpdate(this.typeReserve).subscribe(res => {
       if (res.responseCode === OK) {
         console.log(res.responseCode);

        this.router.navigate(['/tipoReserva']);
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
  get nameControl() {
    return this.nameFormControl;
  }
  get valid() {
    return this.isValid;
  }
  get typeReserveActually() {
    return this.typeReserve;
  }

  get priceControl() {
    return this.priceFormControl;
  }

}
