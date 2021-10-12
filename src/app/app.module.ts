import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';


import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProtegidaComponent } from './componentes/protegida/protegida.component';
import { PreciosComponent } from './componentes/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-bymcox6f.us.auth0.com',
      clientId: 'w3cb2FGvNdgWWa18yGydV8lEuP6ZdEph'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
