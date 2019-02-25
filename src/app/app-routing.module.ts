import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { InventarioComponent } from './inventario/inventario.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { TarifaComponent } from './tarifa/tarifa.component';
import { ReservaOnlineComponent } from './reserva-online/reserva-online.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { ContrasenaComponent } from './admin/contrasena/contrasena.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DatosHabitacionComponent } from './datos-habitacion/datos-habitacion.component';
import { DatosHotelComponent } from './datos-hotel/datos-hotel.component';
import { PrimerosPasosComponent } from './primeros-pasos/primeros-pasos.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'user', component: UserComponent},
  {path: 'createUserComponent', component: CreateUserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'establecimiento', component: EstablecimientoComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tarifa', component: TarifaComponent},
  {path: 'reservaOnline', component: ReservaOnlineComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'nuevaReserva', component: NuevaReservaComponent},
  {path: 'contrasena', component: ContrasenaComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'datosHabitaciones', component: DatosHabitacionComponent},
  {path: 'datosHotel', component: DatosHotelComponent},
  {path: 'primerosPasos', component: PrimerosPasosComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
