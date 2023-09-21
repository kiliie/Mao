import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { CambiarContraLoginComponent } from './cambiar-contra-login/cambiar-contra-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CotizacionComponent,
    LoginComponent,
    RegistroLoginComponent,
    
    CambiarContraLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
