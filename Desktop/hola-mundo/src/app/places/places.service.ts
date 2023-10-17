import { Injectable } from '@angular/core';
import {place} from './place.model'
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: place [] = [
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'3',
      title: 'La giralda',
      imageURL: 'https://urbansevilla.es/wp-content/uploads/2019/06/la-giralda-sevilla-airpano.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id:'1',
      title: 'Torre Eiffel',
      imageURL: 'https://image.posterlounge.es/img/products/380000/374393/374393_poster_l.jpg',
      comments:['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
    },
    {
      id:'2',
      title: 'Estatua de la libertad',
      imageURL: 'https://image.posterlounge.es/img/products/580000/577805/577805_poster_l.jpg',
      comments:['Increibles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    }
  ]
  constructor() { }
/**
 * getPlaces() 
 */
  getPlaces() {
    return[...this.places]

  }
/**
 * getPlace() : recupera el valor del array que se pulse
 * @param placeID
 */
  getPlace(placeID:string){
    return{
      ...this.places.find(place =>{
        return place.id==placeID
      })
    }
  }
/**
 * addPlace() Este metodo añde un objeto nuevo al final del array places
 * @param title Sera el titulo del objeto
 * @param imageURL Sera la imagen del objeto
 */
  addPlace(title:string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: (this.places.length+1).toString()
    });
  }

  deletePlace(placeId: string){
    this.places=this.places.filter(place =>{
      return place.id != placeId
    })
  }
}
