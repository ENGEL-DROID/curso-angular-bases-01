import { Component } from "@angular/core";

@Component ({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroreComponent {
    nombre: string = 'Pipeido';
    edad: number = 39;

    obtenerData(): string {
        return `${this.nombre} - ${this.edad}`
    }

    capitalizarNombre(): string {
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = "Superman";
    }

    cambiarEdad(): void {
        this.edad = 40;
    }
}