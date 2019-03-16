import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http/';


import { AppComponent } from './app.component';
import {AngularMaterial} from './angular.material';
import { ConteinerComponent } from './conteiner/conteiner.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule,
  MatSelectModule,  MatTableModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatExpansionModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule, MatTabsModule, MatTooltipModule, MatTreeModule} from '@angular/material';


import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReservaComponent } from './reserva/reserva.component';
import { InventarioComponent, ModalCompraInventario } from './inventario/inventario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ContrasenaComponent } from './admin/contrasena/contrasena.component';
import { LoginComponent } from './login/login.component';
import { SalirComponent } from './admin/salir/salir.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PrimerosPasosComponent } from './primeros-pasos/primeros-pasos.component';
import { DatosHotelComponent } from './datos-hotel/datos-hotel.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ProvedoresComponent } from './provedores/provedores.component';
import { CreateProvedoresComponent } from './create-provedores/create-provedores.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { TipoReservaComponent } from './tipo-reserva/tipo-reserva.component';
import { CreateTipoReservaComponent } from './create-tipo-reserva/create-tipo-reserva.component';
import { SteateRoomComponent } from './estado-habitacion/steate-room.component';
import { CreateSteateRoomComponent } from './create-steate-room/create-steate-room.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { CreateHabitacionComponent } from './create-habitacion/create-habitacion.component';
import { InfoReservasComponent } from './info-reservas/info-reservas.component';
import { ReservaHabitacionComponent } from './reserva-habitacion/reserva-habitacion.component';


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
    NuevaReservaComponent,
    ConfiguracionComponent,
    PrimerosPasosComponent,
    DatosHotelComponent,
    ProvedoresComponent,
    CreateProvedoresComponent,
    CreateProductComponent,
    ModalCompraInventario,
    FacturacionComponent,
    TipoReservaComponent,
    CreateTipoReservaComponent,
    SteateRoomComponent,
    CreateSteateRoomComponent,
    HabitacionComponent,
    CreateHabitacionComponent,
    InfoReservasComponent,
    ReservaHabitacionComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[InventarioComponent, ModalCompraInventario]
})
export class AppModule { }
