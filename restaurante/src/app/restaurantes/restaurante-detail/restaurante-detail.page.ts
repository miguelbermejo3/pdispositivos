import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestaurantesService } from '../restaurantes.service';
import { restaurante } from '../restaurante.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.page.html',
  styleUrls: ['./restaurante-detail.page.scss'],
})
export class RestauranteDetailPage implements OnInit {

  mirestaurante: restaurante={id:'',imageURL:'',nombre:'',descripcion:'',numeroTenedoresURL:'',comentarios:[]};
  constructor(private activatedRouted:ActivatedRoute, private restauranteService:RestaurantesService,private router: Router, private alertCtrl:AlertController ) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipeId=paramMap.get('restauranteID');
      this.mirestaurante=this.restauranteService.getRestaurante(recipeId)
      console.log(recipeId);
      
    }

    )
  }

  async deleteRestaurante(){
    const element= await this.alertCtrl.create(
      {
        header:'Está seguro que quieres eliminar este restaurante?',
        message:'Tenga cuidado',
        buttons:[
          {
            text:'cancel',
            role:'cancel'
          },
          {
            text:'delete',
            handler:() =>{
              this.restauranteService.deleteRestaurante(this.mirestaurante.id);
              this.router.navigate(['/restaurantes'])
            }
          }
        ]
      }
    )


await element.present();

  }

}
