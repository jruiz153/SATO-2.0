import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPlanillaRepartoComponent } from './crear-planilla-reparto/crear-planilla-reparto.component';
import { RepartoRoutingModule } from './reparto-routing.module';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ControlRepartoComponent } from './control-reparto/control-reparto.component';

@NgModule({
  declarations: [CrearPlanillaRepartoComponent, ControlRepartoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RepartoRoutingModule
  ],
  exports:[
    CrearPlanillaRepartoComponent, 
    ControlRepartoComponent,
    RepartoRoutingModule
  ]
})
export class RepartoModule { 
  constructor(){
    console.log('lrpm')
  }
}
