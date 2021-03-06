import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

//Rutas

import {APP_ROUTING} from './app.routes';

//Servicios
import { ProyectosService } from './services/proyectos.service';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Cambio de idioma
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';


import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleryComponent } from './components/body/galery/galery.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoComponent } from './components/body/producto/producto.component';
import { BusquedaComponent } from './components/body/busqueda/busqueda.component';
import { from } from 'rxjs';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    GaleryComponent,
    HeaderComponent,
    ProductoComponent,
    BusquedaComponent,
    CapitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
