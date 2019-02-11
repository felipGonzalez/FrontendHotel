import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit  {


  private breakpoint:  Number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = 2;
    }

  }
