import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes:Heroe[]=[];

  constructor( private _heroesService:HeroesService,
              private router:Router ){
    //console.log("constructor");
  }

  ngOnInit(){//El OnInit se utiliza cuando la pág ya esta lista para ser trabajada
    this.heroes = this._heroesService.getHeroes() ;
    //console.log(this.heroes);
  }

    verHeroe(idx : Number){
      this.router.navigate( ['/heroe', idx] );
    }
}
