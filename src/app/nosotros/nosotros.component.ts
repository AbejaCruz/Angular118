import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../services/equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
	miEquipo:Array<any>;
  constructor(private _servicio: EquipoService) {
	//this.miEquipo=[{nombre:"",especialidad:""}];
	this.miEquipo=this._servicio.traerEquipo();
}

  ngOnInit() {

	
  }

}
