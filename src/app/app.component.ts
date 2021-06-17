import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // indica la etiqueta principal del Html en donde se va a poner todo
  templateUrl: './app.component.html',  // indica el Componente Html a cargar dentro del selector
  styleUrls: ['./app.component.css']  // es el fichero css
})

// la clase principal de la aplicación:
export class AppComponent {

  // parámetro o variables
  title: string = 'Contador App';
  numero: number = 10;
  numero2: number = 10;
  base: number = 5;

  // métodos
  sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -= 1;
  }

  acumular(valor:number) {
    this.numero2 += valor;
  }
}
