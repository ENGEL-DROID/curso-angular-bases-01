import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroreComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroreComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        HeroreComponent
    ],
    imports: [  // Aquí sólo se importan Módulos
        CommonModule
    ],
    bootstrap: [

    ]
})
export class HeroesModule {

}