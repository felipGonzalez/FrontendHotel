import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ReservaComponent } from '../reserva/reserva.component';
import { NuevaReservaComponent } from '../nueva-reserva/nueva-reserva.component';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.css']
})
export class ConteinerComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {}

  onEdit(): void {
    // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(NuevaReservaComponent, {
          width: '800px'
       });
}

}
