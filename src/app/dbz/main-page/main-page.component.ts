import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    // si el nombre no tiene nada q se salga del método
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } 

    this.personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

    console.log(this.nuevo);

  }

}