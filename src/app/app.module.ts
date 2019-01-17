import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importación de rutas para manejo de routes
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';

//Agregando bootsrtap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { AcerComponent } from './acer/acer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoService} from './services/equipo.service';
import { EquipoComponent } from './equipo/equipo.component';


//Definición de variable ruta
const routes:Routes=[
  {path:"", component: InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"acerca", component:AcerComponent},
  {path:"nosotros", component:NosotrosComponent}, 
  {path:"equipo/:id",component:EquipoComponent},
  {path:"**", redirectTo:"/", pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,

    CabeceraComponent,
    PiedepaginaComponent,
    InicioComponent,
    AcerComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
