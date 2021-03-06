import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title     = 'tarjeta';
  nombre    : string = ' Capitán América';
  nombre2    : string = 'EdiSOn OsPInA CORREDor';
  personajes: string[] = ['Iroman', 'spiderman', 'thor', 'loki', 'groot'];
  PI        : number = Math.PI;
  porcentaje: number = 0.236;
  salario   : number = 877803;
  fecha     : Date = new Date();
  idioma    : string = 'fr';

  urlVideo  : string = 'https://www.youtube.com/embed/aSI8_c2sJW0';

  valorPromesa = new Promise<string>((resolve) =>{

    setTimeout(()=>{
      resolve('llego la data');
    }, 4500 );
  });

  heroe ={
    nombre: 'Logan', 
    clave:'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa:20

    }
  }

}
