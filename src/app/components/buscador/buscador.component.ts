import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Para agarrar el parámetro que se manda por la URL
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[] //Arreglo porque pueden ser varias coincidencias
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
            ) { //Aquí ya tenemos nuestro parámetro
   }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['termino']; //Lo que venga en el término
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

}
