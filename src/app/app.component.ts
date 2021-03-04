import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title     = 'tarjeta';
  nombre    : string = ' Capitán América';
  personajes: string[] = ['Iroman', 'spiderman', 'thor', 'loki', 'groot'];
  PI        : number = Math.PI;
  porcentaje: number = 0.236;
}
