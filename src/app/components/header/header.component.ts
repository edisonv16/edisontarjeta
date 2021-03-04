import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router

  ) { }

  ngOnInit(): void {
  }

  buscarProducto(termino:string){
    // console.log(termino);

    this.router.navigate(['/busqueda', termino]);
  }

}
