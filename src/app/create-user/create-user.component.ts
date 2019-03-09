import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../model/UserModel';
import { CreateUserService } from './create-user.service';
import { OK } from '../model/httpStatus';
import { TypeDocument } from '../model/TypeDocument';
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
      this.message = 'Los campos con * son obligatorios';
    }
   }

   onChange(event) {
    console.log(event)
  }

  get messageInfo() {return this.message; }
  get genderList(){return this.genders; }
  get typeDocumentList() {return this.typeDocuments; }
  get userActually() {return this.user; }
  get valid() {return this.isValid; }
}
