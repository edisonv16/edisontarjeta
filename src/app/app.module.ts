import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import {APP_ROUTING} from './app.routes';

//Servicios
import { ProyectosService } from './services/proyectos.service';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleryComponent } from './components/body/galery/galery.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoComponent } from './components/body/producto/producto.component';
import { BusquedaComponent } from './components/body/busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    GaleryComponent,
    HeaderComponent,
    ProductoComponent,
    BusquedaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
    
  ],
  providers: [
    ProyectosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
