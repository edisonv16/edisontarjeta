import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  paises: any [] =[];

  constructor(private http:HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')

    .subscribe( (respuesta:any) => {
        this.paises = respuesta;
        console.log(respuesta);
    })

  }

  ngOnInit(): void {
  }

}
