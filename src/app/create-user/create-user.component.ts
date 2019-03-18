import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from 'src/app/model/UserModel';
import { CreateUserService } from './create-user.service';
import { OK } from 'src/app/model/httpStatus';
import { TypeDocument } from 'src/app/model/TypeDocument';
import { FormControl, Validators } from '@angular/forms';

export interface Gender {
  nameGender: string;
  domainGender: string;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private  user: UserModel;
  private isValid: boolean;
  private message: string;
  private typeDocuments: Array<TypeDocument>;
  private genders: Gender[] = [
    {nameGender: 'Masculino', domainGender: 'M'},
    {nameGender: 'Femenino', domainGender: 'F'},
    {nameGender: 'Indefinido', domainGender: 'I'}
  ];

  userControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  selectGenderControl = new FormControl('', Validators.required);

  nameFormControl = new FormControl('', [Validators.required,
    Validators.maxLength(30)
  ]);
  lastFormControl = new FormControl('', [Validators.required,
    Validators.maxLength(30)
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  documentFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  constructor(private createUserService: CreateUserService,
    private router: Router ) {

      if (sessionStorage.getItem('user')) {
        this.user = JSON.parse(sessionStorage.getItem( 'user'));
      } else {
        this.user = new UserModel();
      }
    this.isValid = true;
    this.message = '';
   }

  ngOnInit() {
    this.loadTypeDocument();


  }

  private loadTypeDocument(): void {
    this.createUserService.getTypeDocument().subscribe(res => {
      this.typeDocuments = res;
      console.log(this.typeDocuments);
    },
      (error: any)  => this.typeDocuments = []
    );
  }

  public saveOurUpdate(): void {
    this.isValid = this.createUserService.validate(this.user);
    console.log(this.isValid);

    if (this.isValid) {
       this.createUserService.saveOurUpdate(this.user).subscribe(res => {
       if (res.responseCode === OK) {
         this.router.navigate(['/user']);
       } else {
         this.message = res.message;
         this.isValid = false;
       }
      });
    } else {
      this.message = 'Los campos en rojo son obligatorios';
    }
   }

   onChange(event) {
    console.log(event)
  }


  public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  public restrictext(e) {
    let input;
    input = String.fromCharCode(e.which);
    return !!/[\D]/.test(input);
  }

  get messageInfo() {return this.message; }
  get genderList(){return this.genders; }
  get typeDocumentList() {return this.typeDocuments; }
  get userActually() {return this.user; }
  get valid() {return this.isValid; }
}
