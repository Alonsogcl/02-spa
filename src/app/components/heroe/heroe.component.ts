import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//Se usa igual que el servicio en el constructor
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:any={};//variable local 

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService
    ) { 
    this.activatedRoute.params.subscribe(params =>{
    console.log(params['id']); //este id es xq en el route se puso este id
    //para obtener el heroe en particular con este id es necesario modificar nuestro servicio
    this.heroe= this._heroesService.getHeroe(params['id']);
  });
}
}
