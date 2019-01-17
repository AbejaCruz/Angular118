import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
 equipo: Array<any>; 
  constructor() { 
  		this.equipo=[
			{ nombre:"Juan",
			especialidad:"HTML",
			bio:"XXX"
		},
			{ nombre:"Daniela",
			especialidad:"CSS",
			bio:""
			},
			{ nombre:"Miguel",
			especialidad:"JavaScript",
			bio:""
		},
  		];
  }
traerEquipo(){
	return this.equipo; 
}
 traerMiembroEquipo(id){
 	return this.equipo[id];
 }
}
