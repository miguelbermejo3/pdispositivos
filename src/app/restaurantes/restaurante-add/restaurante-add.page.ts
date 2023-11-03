import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-restaurante-add',
  templateUrl: './restaurante-add.page.html',
  styleUrls: ['./restaurante-add.page.scss'],
})
export class RestauranteAddPage implements OnInit {
titulo_pagina:string="Nuevo Restaurante";
  constructor(private restauranteService:RestaurantesService, private router:Router) { }

  ngOnInit() {
  }

  guardarRestaurante(nombre:any,image:any){
    this.restauranteService.addRestaurante(nombre.value,image.value)
    this.router.navigate(['/restaurantes'])
  }

}
