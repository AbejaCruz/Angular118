import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saludo:boolean;
  noticias:Array<any>;
  clase:string;

  constructor(){
  	this.clase="rojo";
  	this.saludo=true;
  	this.noticias=[{
  		titulo: "hola",
  		contenido: "adasd"},
  		{
  		titulo: "dada",
  		contenido: "adada"},
  		{
  		titulo: "adasd",
  		contenido: "adadada"

  	}] 
  }
  saludar(){
  	this.saludo=!this.saludo;
  }
  cambiarColor(){
  	if(this.clase=="rojo"){
  		this.clase="azul";
  	} else{
  		this.clase="rojo";
  	}
  }
}
