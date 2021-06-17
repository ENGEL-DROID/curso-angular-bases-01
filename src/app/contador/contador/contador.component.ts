import { Component } from '@angular/core' // se importa la interface Component 

// se ejecuta el decorador:
@Component({
    selector: 'app-contador',
    template: `
    <h1> {{ title }} </h1>  

    <!-- Usando las llaves dobles {{ }} se accede a componentes de app.components.ts -->

    <!-- Una forma de hacer el contador usando dos métodos -->
    <button (click) = " sumar() "> +1 </button>
    <span> {{ numero }} </span>
    <button (click) = " restar() "> -1 </button>

    <br><br>

    <!-- Otra forma de usar el contador usando un solo método -->
    <button (click) = " acumular(+1) "> +1 </button>
    <span> {{ numero }} </span>
    <button (click) = " acumular(-1) "> -1 </button>

    <br><br>

    <!-- Ejercicio con base 5 -->
    <h3>La base es: <strong>{{ base }}</strong></h3>
    <button (click) = " acumular(+base) "> + {{base}} </button>
    <span> {{ numero2 }} </span>
    <button (click) = " acumular(-base) "> - {{base}} </button>
    `
})
export class ContadorComponent {

    title: string = 'Contador App Pipe';
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
