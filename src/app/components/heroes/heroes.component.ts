import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes:Heroe[]=[];

  constructor( private _heroesService:HeroesService ){
    console.log("constructor");
  }

  ngOnInit(){//El OnInit se utiliza cuando la pág ya esta lista para ser trabajada
    this.heroes = this._heroesService.getHeroes() ;
    console.log(this.heroes);
  }
}
