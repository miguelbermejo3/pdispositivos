import { Injectable } from '@angular/core';
import { restaurante } from './restaurante.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  restaurantes:restaurante[]=[
    {
      id: '1',
      imageURL:'https://res.cloudinary.com/tf-lab/image/upload/w_1920,c_fill,q_auto,f_auto/restaurant/02d0e9a6-01eb-4fea-840c-4154b8f2f6be/fd320935-1657-47bf-aa39-45fb02731a64.jpg',
      nombre:'Artilleria',
      descripcion:'Acogedor E Íntimo, Creativo, De Moda, Romántico, Amex Welcome, Black Friday, Día De La Madre, Día Del Padre, TheFork Festival, TOGETHER, Platos Veganos, Sin Gluten',
      numeroTenedoresURL:'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586_m.JPG',
      comentarios:['Calidad superior, de los mejores restaurante en sevilla, y sus camareros, de 10, solemos ir bastante a menudo, y seguiremos acudiendo a nuestra cita allí.','Muy bueno todo lo que comimos. Con la promoción que se ofrecía con The Folk merece muchísima la pena.']
    
    },
    {
      id:'2',
      imageURL:'https://res.cloudinary.com/tf-lab/image/upload/w_1920,c_fill,q_auto,f_auto/restaurant/60c7b858-8d97-4629-9fe1-a63c6adc8637/b0b76aa3-4b8e-47f6-906f-30a6719bf9ba.jpg',
      nombre:'Yate "El Miarma"',
      descripcion:'Con Amigos, Con Vistas, De Moda, En La Playa, Terraza, Terrazas De Verano, Amex Welcome, TheFork Summer, Europeo, Sin Gluten',
      numeroTenedoresURL:'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586_m.JPG',
      comentarios:[]
    },
    {
      id:'3',
      imageURL:'https://scontent.fmad8-1.fna.fbcdn.net/v/t39.30808-6/294565280_724637518877881_8498011438539479068_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AVVAYDPKCJsAX8Bbqq0&_nc_ht=scontent.fmad8-1.fna&oh=00_AfDd9a5ZULHAAQmVC4B9DXp4AjFJBT8OYTXihHV5646bcA&oe=65486D02',
      nombre:'Abacería La Juana',
      descripcion:'Abacería La Juana es un restaurante que se encuentra en la ciudad de Sevilla (Porvenir)',
      numeroTenedoresURL:'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9FE3/EE78/5D32/39A2/C0A8/2BB9/C6CD/placa-senal-xSEC738_m.jpg',
      comentarios:['Un sitio para tapear bastante bien, económico, aunque sin duda lo mejor el camarero llamado " cuki " bastante simpático y atento.. si vuelvo será por el','Las cabrillas inmejorables, la chacina de 10. Muy amables y atentos. Croquetas caseras. Muy recomendable.']
    }
  ]

  constructor() { }
  getRestaurantes(){
    return [...this.restaurantes]
  }
  getRestaurante(restauranteID:string | null){
return {
  ...this.restaurantes.find(restaurante=>{
    return restaurante.id===restauranteID;
  })
    
}
}


addRestaurante(nombre:string,imageURL:string){
this.restaurantes.push({
 
 nombre,
 imageURL,
 descripcion:'',
 numeroTenedoresURL:'',
 comentarios:[],
 id:(this.restaurantes.length+1).toString()
  
})
}

deleteRestaurante(restauranteID:string|undefined){
  this.restaurantes=this.restaurantes.filter(restaurante=>{
    return restaurante.id!=restauranteID;
  })
}


}
