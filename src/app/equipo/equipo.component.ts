import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../services/equipo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  miembroEquipo:any;

    constructor(
      private _equipoService:EquipoService,
      private _rutaService:ActivatedRoute
      ) {
      this.miembroEquipo={nombre:"",especialidad:"",bio:""}
    }

    ngOnInit() {
      this._rutaService.params.
        subscribe(parametros=>{
          this.miembroEquipo=this._equipoService.
            traerMiembroEquipo(parametros['id']);
        },error=>{
          console.log(error);
        });
        
    }

}