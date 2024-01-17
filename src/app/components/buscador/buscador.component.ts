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

  private heroesComponent:HeroesComponent | undefined;
verHeroe(item: number) {
this.heroesComponent?.verHeroe(item);
}
  termino?:string;
  heroes:any[] = []

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService){
  }

  ngOnInit(){
this.activatedRoute.params.subscribe( params =>{
  console.log('termino');
  this.termino = params['termino'];
  this.heroes = this._heroesService.buscarHeroes( params['termino'] );
  console.log(this.heroes);
})
  }


}
