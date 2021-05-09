import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { NgForm } from '@angular/forms';
import { TareaService } from '../../services/tareas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.scss']
})
export class NuevaTareaComponent implements OnInit {

  tarea: TareaModel =new TareaModel();

  constructor(private tareasService: TareaService) {}

  ngOnInit(): void {
  }
  guardar( form: NgForm ){
    if(form.invalid){
      console.log('Fomulario valido');
      return;

    }
    this.tareasService.createTarea(this.tarea)
    .subscribe(resp => {
      console.log(resp);
      this.tarea = resp;
    })
   
  }

}
