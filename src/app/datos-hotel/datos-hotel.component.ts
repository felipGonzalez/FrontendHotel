import { Component, OnInit } from '@angular/core';
import { HotelModel } from 'src/app/model/HotelModel';
import { DatosHotelService } from './datos-hotel.service';
import { Router } from '@angular/router';
import { OK } from 'src/app/model/httpStatus';

@Component({
  selector: 'app-datos-hotel',
  templateUrl: './datos-hotel.component.html',
  styleUrls: ['./datos-hotel.component.css'],
  providers: [DatosHotelService]
})
export class DatosHotelComponent implements OnInit {

  private dataHotel: HotelModel;
  private isValid: boolean;
  private message: string;

  constructor(
    private dataHotelService: DatosHotelService,
    private router: Router
  ) {
    this.isValid = true;
    this.message = '';
    this.dataHotel = new HotelModel();
   }

  ngOnInit() {

    this.loadDataHotel();
  }

  private loadDataHotel(): void {

    this.dataHotelService.getData().subscribe(res => {
      this.dataHotel = res;
      console.log(this.dataHotel);
    },
      (error: any)  => this.dataHotel = new HotelModel()
    );
  }

  public saveOurUpdate(): void {
    this.isValid = this.dataHotelService.validate(this.dataHotel);
    console.log(this.isValid +"Respuesta de validar");

    if (this.isValid) {
       this.dataHotelService.saveOurUpdate(this.dataHotel).subscribe(res => {
       if (res.responseCode === OK) {
         alert('Datos actualizados correctamente');
       this.router.navigate(['/datosHotel']);
       } else {
         this.message = res.message;
         this.isValid = false;
       }
      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
   }

   get valid() {
     return this.isValid;
   }

   get messageInfo() {
     return this.message;
   }

   get  dataHotelActally() {
     return this.dataHotel;
   }

}
