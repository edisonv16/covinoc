import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  tarea: TareaModel [] = [];

  constructor(private tareaServices: TareaService ) { }

  ngOnInit(): void {
    this.tareaServices.getTareas()
    .subscribe(resp=>this.tarea = resp);
  }

}
