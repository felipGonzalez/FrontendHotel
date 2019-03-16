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
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { ContrasenaComponent } from './admin/contrasena/contrasena.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DatosHotelComponent } from './datos-hotel/datos-hotel.component';
import { PrimerosPasosComponent } from './primeros-pasos/primeros-pasos.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import { CreateProvedoresComponent } from './create-provedores/create-provedores.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { CreateTipoReservaComponent } from './create-tipo-reserva/create-tipo-reserva.component';
import { TipoReservaComponent } from './tipo-reserva/tipo-reserva.component';
import { SteateRoomComponent } from './estado-habitacion/steate-room.component';
import { CreateSteateRoomComponent } from './create-steate-room/create-steate-room.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { CreateHabitacionComponent } from './create-habitacion/create-habitacion.component';
import { InfoReservasComponent } from './info-reservas/info-reservas.component';
import { ReservaHabitacionComponent } from './reserva-habitacion/reserva-habitacion.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'createUserComponent', component: CreateUserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'establecimiento', component: EstablecimientoComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'infoReserva', component: InfoReservasComponent},
  { path: 'nuevaReserva', component: NuevaReservaComponent },
  { path: 'contrasena', component: ContrasenaComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'datosHotel', component: DatosHotelComponent },
  { path: 'primerosPasos', component: PrimerosPasosComponent },
  { path: 'provedores', component: ProvedoresComponent },
  { path: 'createProvedores', component: CreateProvedoresComponent },
  { path: 'createProduct', component: CreateProductComponent},
  { path: 'facturacion', component: FacturacionComponent},
  { path: 'tipoReserva', component: TipoReservaComponent},
  { path: 'crearTipoReserva', component: CreateTipoReservaComponent},
  { path: 'estadoHabitacion', component: SteateRoomComponent },
  { path: 'crearEstadoHabitacion', component: CreateSteateRoomComponent},
  { path: 'habitacion', component: HabitacionComponent},
  { path: 'crearHabitacion', component: CreateHabitacionComponent},
  { path: 'reservaHabitacion', component: ReservaHabitacionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
