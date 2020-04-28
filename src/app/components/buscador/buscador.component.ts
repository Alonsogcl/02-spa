import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    buscarHeroes(termino: string): Heroe[] {
      let heroesArr: Heroe[] = [];
      termino = termino.toLowerCase();
      //Por cada uno de los heroes lo va a verificar todo
      for (let heroe of this.heroes) { //barrido de todo nuestro arreglo de los heroes para ver si alguno tiene el nombre que estamos buscando, barrer todos los heroes que tengo en el servicio 
        let nombre = heroe.nombre.toLowerCase(); //por cada iteración voy a extraer el nombre de cada heroe 

        if (nombre.indexOf(termino) >= 0) { //si el nombre de la iteracion de mi heroe (indexof me permitira buscar un string dentro del nombre) Si se encuentra el termino en ese nombre va a regresar la posicion donde la encuentra un 0 o superior sino lo encuentra regresa un -1 , mayor q 0 si encontro el termino
          heroesArr.push(heroe); //Agregar ese heroe a mi nuevo de arreglos temporal xq no queremos modificar la data del arreglo
        }
      }
      return heroesArr; //Regresa un arreglo de Heroe
    }
  }

}
