import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http/';

import { AppComponent } from './app.component';
import {AngularMaterial} from './angular.material';
import { ConteinerComponent } from './conteiner/conteiner.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule} from '@angular/material';


import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReservaComponent } from './reserva/reserva.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ContrasenaComponent } from './admin/contrasena/contrasena.component';
import { LoginComponent } from './login/login.component';
import { SalirComponent } from './admin/salir/salir.component';
import { TarifaComponent } from './tarifa/tarifa.component';
import { ReservaOnlineComponent } from './reserva-online/reserva-online.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteinerComponent,
    UserComponent,
    CreateUserComponent,
    ReservaComponent,
    InventarioComponent,
    DashboardComponent,
    EstablecimientoComponent,
     AdminComponent,
    ContrasenaComponent,
    LoginComponent,
    SalirComponent,
    TarifaComponent,
    ReservaOnlineComponent,
    NuevaReservaComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterial,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
