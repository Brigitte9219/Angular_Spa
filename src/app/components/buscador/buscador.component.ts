import { HeroesComponent } from './../heroes/heroes.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Representa la ruta activa actual
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(){
this.activatedRoute.params.subscribe( params =>{
  console.log(params['termino']);
})
  }


}
