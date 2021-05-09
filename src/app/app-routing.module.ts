import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';


const routes: Routes = [
  {path:'tareas', component: ListaTareasComponent},
  {path:'tarea/:id', component: NuevaTareaComponent},
  {path:'**', pathMatch: 'full', redirectTo:'tareas'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
