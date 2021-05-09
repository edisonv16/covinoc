import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tareas.service';
import Swal from 'sweetalert2';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  tarea: TareaModel [] = [];
  cargando = false;
  suscription: Subscription;

  constructor(private tareaServices: TareaService ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.tareaServices.getTareas()
    .subscribe(resp=>this.tarea = resp);
    this.cargando = false;

    this.suscription = this.tareaServices.refresh$
    .subscribe(()=>{
      this.tareaServices.getTareas();
    });
  }

  actualizarTarea(tarea: TareaModel){
    this.tareaServices.actualizarTarea(tarea)
    .subscribe();
  }


  borrarTarea(tarea: TareaModel, i: number){
    Swal.fire({
      title: '¿Está seguro?',
      text:`Está seguro que desea borrar a {tarea.nombre}`,
      icon:'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then (resp =>{
      if (resp.value){
        this.tarea.splice(i,1);
        this.tareaServices.borrarTarea(tarea.id)
        .subscribe();
      }
    });
  }
}
