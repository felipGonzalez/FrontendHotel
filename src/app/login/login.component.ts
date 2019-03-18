import { UserInterface } from '../model/UserLogin';
import { LoginService } from './login.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: LoginService, private router: Router){
  }

  private aux: UserInterface;

  private user: UserInterface = {
    name: '',
    pasword: ''
  }

  public isError = false;

  ngOnInit(): void {
    this.authService.loginUser().subscribe(data => {
      this.aux = data;
      console.log(this.aux.pasword + "  ---------------");
      ;
    },
    error => this.onIsError()
    );
  }

  onLogin(form: NgForm){
    if (form.valid) {

        if(this.validate()){
          this.authService.setUser(this.aux);
          const token = this.aux.id;
          this.authService.setToken(token);
          this.router.navigate(['/']);
          location.reload();
          this.isError = false;

          console.log("iguales");

        }else{
          this.onIsError();
        }
    } else {
      this.onIsError();
    }
  }

  private validate(): boolean{
    return (this.user.name == this.aux.name && this.user.pasword == this.aux.pasword);
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  get getUser() {
    return this.user;
  }

}
