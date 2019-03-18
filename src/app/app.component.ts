import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-yeimar';

private vari : string;

constructor(private loginService: LoginService) {
  this.vari = this.loginService.getToken();

}

get getVari() {
  return this.vari;
}

}
