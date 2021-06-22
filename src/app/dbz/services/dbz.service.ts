import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

// un servicio en angular se distingue por el decorador Injectable
@Injectable()
export class DbzService {

    constructor() {
        
    }

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ]

    get personajes(): Personaje[] {
        // los tres punto son el operador spread
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
    
}