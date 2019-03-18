import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog} from '@angular/material';
import { NuevaReservaComponent } from 'src/app/nueva-reserva/nueva-reserva.component';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.css']
})
export class ConteinerComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private loginService: LoginService,
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {}

  onEdit(): void {
    // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(NuevaReservaComponent, {
          width: '800px'
       });
}

public openFile() {
  window.open("https://firebasestorage.googleapis.com/v0/b/hotelyeimar-001.appspot.com/o/Manual.pdf?alt=media&token=c076aca5-ef08-4238-b65a-24df7ab6755f");
}


 public logOut() {
  this.loginService.logoutUser();
  location.reload();
 }

}
