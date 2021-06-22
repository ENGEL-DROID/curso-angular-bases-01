import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() 
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // se inyecta el servicio
  constructor(private dbzService: DbzService) {

  }

  // Output se utiliza para emitir, en éste caso se quiere emitir Personaje
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    // si el nombre no tiene nada q se salga del método
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } 

    // con el método emit() se emite el evento creado en el Output
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
