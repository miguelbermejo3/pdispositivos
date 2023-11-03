import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from './restaurantes.service';
import { restaurante } from './restaurante.model';
import{Router} from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

    titulo="Restaurantes";
    restaurantes: restaurante[] = [];




  constructor(private restauranteService:RestaurantesService, private router:Router) { }

  ngOnInit() {
   this.restaurantes=this.restauranteService.getRestaurantes();
  }
  ionViewWillEnter(){
    this.restaurantes=this.restauranteService.getRestaurantes();
  }

  anhadirRestaurante(){

this.router.navigate(['/nuevo-restaurante']);

  }

}
