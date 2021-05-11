import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarTareaComponent } from './components/buscar-tarea/buscar-tarea.component';
import { HomeComponent } from './components/home/home.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


const routes: Routes = [
  {path:'Home', component: HomeComponent},
  {path:'tareas', component: ListaTareasComponent},
  {path:'protegida', component: ProtegidaComponent},
  {path:'buscartarea', component: BuscarTareaComponent},
  {path:'buscartarea/:termino', component: BuscarTareaComponent},
  {path:'tarea/:id', component: NuevaTareaComponent},
  {path:'**', pathMatch: 'full', redirectTo:'Home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
