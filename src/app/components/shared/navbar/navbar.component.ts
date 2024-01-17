import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//Nos permite navegar en la aplicacion
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {

  }

  buscarHeroe(termino:string){
    console.log(termino);
    this.router.navigate(['/buscar',termino]);

  }
}
