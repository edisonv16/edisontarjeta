import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService, Proyec } from '../../../services/proyectos.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.sass']
})
export class BusquedaComponent implements OnInit {

  proyecto:Proyec[] = [];
  termino:string;

  constructor(
    private _buscarService:ProyectosService,
    private activatedRoute: ActivatedRoute
   

    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.proyecto = this._buscarService.buscarProducto( params ['termino'] );
    } );
  }
}
