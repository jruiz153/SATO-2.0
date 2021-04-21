import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPlanillaRecoleccionComponent } from './crear-planilla-recoleccion/crear-planilla-recoleccion.component';
import { MonitorRecoleccionComponent } from './monitor-recoleccion/monitor-recoleccion.component';
import { ControlRecoleccionComponent } from './control-recoleccion/control-recoleccion.component';
import { CrearOrdenServicioComponent } from './crear-orden-servicio/crear-orden-servicio.component';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RecoleccionRoutingModule } from './recoleccion-routing.module';


@NgModule({
  declarations: [CrearPlanillaRecoleccionComponent, MonitorRecoleccionComponent, ControlRecoleccionComponent, CrearOrdenServicioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RecoleccionRoutingModule,
  ],
  exports:[
    CrearPlanillaRecoleccionComponent, 
    MonitorRecoleccionComponent, 
    ControlRecoleccionComponent, 
    CrearOrdenServicioComponent
  ]
})
export class RecoleccionModule { }
