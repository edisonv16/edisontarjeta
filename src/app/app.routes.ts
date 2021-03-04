import { importType } from '@angular/compiler/src/output/output_ast';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from '../app/components/body/body.component';
import {GaleryComponent} from '../app/components/body/galery/galery.component';
import {FooterComponent} from '../app/components/footer/footer.component';
import {ProductoComponent} from './components/body/producto/producto.component';
import {BusquedaComponent} from './components/body/busqueda/busqueda.component';



const APP_ROUTES: Routes =[
    { path: 'home', component: BodyComponent },
    { path: 'galery', component: GaleryComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);