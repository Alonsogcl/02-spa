import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}; //indica que esta propiedad va a ser recibida desde afuera
  //heroe se puede inicializar desde el constructor y si no recibe un valor desde afuera se pondrá lo que inicialice en el constructor
  //Al poner el decorador Input me habilita que a donde vaya a utilizar esta etiqueta html 
  //puedo mandarle argumentos desde el padre hasta allá utilizando el mismo nombre que se le puso a la propiedad heroe
  //si se pone heroe entre llaves cuadradas [heroe] puedo mandar el valor de una variable, una expresión a ese componente.
  @Input() index: number; //se va a recibir mediante los argumentos que se encuentran afuera de este componente
  //lo recibirá de heroes.component.html

  @Output() heroeSeleccionado: EventEmitter<number>;//nombre del evento que yo quiero que el padre esté escuchando, hay que especificar que tipo de información va a emitir esta función
  //si va a emitir un objeto un booleano, string, en este caso se quiere emitir un tipo number porque quiero mandar el index
  constructor(private router:Router) { 
    this.heroeSeleccionado= new EventEmitter(); //Hay que inicializar este evento emitter
    //lo que se quiere es que dispare un evento personalizado
  }

  ngOnInit(): void {
  }

  verHeroe() {
   // console.log(this.index);
   // this.router.navigate(["/heroe", this.index]);
   this.heroeSeleccionado.emit(this.index); //Que emita el indice que estoy recibiendo, se puede emitir cualquier cosa
  }
}
