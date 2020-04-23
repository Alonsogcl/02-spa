import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { Router } from "@angular/router"; //Como se está importando un elemento llamado router es como utilizar un servicio se necesita crear una variable de este tipo en el constructor
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
    //console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx: number) {
    //Para que esto funcione hay que importar el router
    // console.log(idx);
    // Cuando den clic aquí voy a usar la variable de arriba
    this.router.navigate(["/heroe", idx]); // recibe un arreglo que es igual al arreglo del path
  }
}
