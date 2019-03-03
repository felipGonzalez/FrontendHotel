import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroupDirective,  NgForm,  Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ProviderModel } from '../model/ProviderModel';
import { OK } from '../model/httpStatus';
import { CreateProvedorService } from './create-provedor.service';



@Component({
  selector: 'app-create-provedores',
  templateUrl: './create-provedores.component.html',
  styleUrls: ['./create-provedores.component.css']
})

export class CreateProvedoresComponent implements OnInit {

  private message: string;
  private nameFormControl;
  private ubicationFormControl;
  private nitFormControl;


  private isValid: boolean;
  private provider: ProviderModel;

  constructor(
    private createProviderService: CreateProvedorService,
    private router: Router
  ) {
    this.message = ' ';
    this.isValid = true;
    this.nameFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(50)

    ]);

    this.ubicationFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(50)

    ]);

    this.nitFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(10)

    ]);

    if (sessionStorage.getItem('provider')) {
      this.provider = JSON.parse(sessionStorage.getItem('provider'));
    } else {
      this.provider = new ProviderModel();
    }
  }

  ngOnInit() {}

  public saveOurUpdate(): void {
    this.isValid = this.createProviderService.validate(this.provider);
    if (this.isValid) {
       this.createProviderService.saveOurUpdate(this.provider).subscribe(res => {
       if (res.responseCode === OK) {
         console.log(res.responseCode);

        this.router.navigate(['/provedores']);
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
  get ubicationControl() {return this.ubicationFormControl; }
  get nitControl() {return this.nitFormControl; }
  get providerActually() {return this.provider; }

}
