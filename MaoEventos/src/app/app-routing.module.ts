import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { CambiarContraLoginComponent } from './cambiar-contra-login/cambiar-contra-login.component';


const routes: Routes = [
  
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada
    { path: 'login', component: LoginComponent }, // Ruta para el inicio de sesión
    { path: 'cotizacion', component: CotizacionComponent }, // Ruta para la cotización
    { path: 'registro', component: RegistroLoginComponent }, // Ruta para la cotización
    { path: 'cambioContra', component: CambiarContraLoginComponent }, // Ruta para la cotización



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
