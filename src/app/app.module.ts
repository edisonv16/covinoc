import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { BuscarTareaComponent } from './components/buscar-tarea/buscar-tarea.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    NuevaTareaComponent,
    BuscarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
