import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [  // en el import van todos los módulos
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [  // en el provider van todos los servicios
    DbzService
  ]
})
export class DbzModule { }
