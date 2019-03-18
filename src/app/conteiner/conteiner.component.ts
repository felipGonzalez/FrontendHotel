import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog} from '@angular/material';
import { NuevaReservaComponent } from 'src/app/nueva-reserva/nueva-reserva.component';


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

public openFile() {
  window.open("https://firebasestorage.googleapis.com/v0/b/hotelyeimar-001.appspot.com/o/Manual.pdf?alt=media&token=8dc6cede-8c1b-458a-ba35-6aa5d2ab35c4");

}

}
