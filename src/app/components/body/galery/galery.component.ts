import { Component, OnInit, Input } from '@angular/core';
import { ProyectosService, Proyec } from '../../../services/proyectos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.sass']
})
export class GaleryComponent implements OnInit {

  @Input() proyecto: Proyec[] =[];


  constructor(
    private _proyectoSrvice:ProyectosService,
    private router:Router
    ) {
  }

  ngOnInit(): void {
   this.proyecto = this._proyectoSrvice.getproyectos();
  }

  verProducto(idx:number){
    this.router.navigate(['/producto', idx]);
  }

}
