import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
//Servicios
import { ProyectosService, Proyec } from '../../../services/proyectos.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {

  

  @Input() proyecto:any ={};
  @Input() index: number;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private _proyectoSrvice:ProyectosService,
    private _location: Location
   
    

    ) {
      this.activatedRoute.params.subscribe( params =>{
        // this.proyect = this._proyectoSrvice.buscarProducto( params ['termino']);
        this.proyecto = this._proyectoSrvice.getproyeto( params ['id']);
      })
  }

  ngOnInit(): void {

  }

  volver() {
    this._location.back();
  }

  verProducto(){

//  console.log( this.index );
 this.router.navigate( ['/producto', this.index] );

 // this.heroeSeleccionado.emit( this.index );
    
  }

}
