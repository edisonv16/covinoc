import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from '../models/tarea.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private url = 'https://tareas-6f894-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  createTarea( tarea: TareaModel){
    return this.http.post(`${this.url}/tareas.json`,tarea)
    .pipe(
      map((resp: any) =>{
        tarea.id = resp.name;
        return tarea;
      })
    );
  }

  getTareas(){
    return this.http.get(`${this.url}/tareas.json`)
    .pipe(
      map( this.crearArreglo),
      delay(1500)
    );
  }

  private crearArreglo(tareaObj: object){
    const productos: TareaModel[] = [];
    Object.keys(tareaObj).forEach( key =>{
      const producto: TareaModel = tareaObj[key];
      producto.id = key;
      productos.push(producto);
    })
    if (tareaObj === null){return[];}
    return productos;
  }
}
