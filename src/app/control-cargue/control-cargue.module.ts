import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearControlCargueComponent } from './crear-control-cargue/crear-control-cargue.component';
import { ControlCargueRoutingModule } from './control-cargue-rounting.module';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CrearControlCargueComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ControlCargueRoutingModule
  ]
})
export class ControlCargueModule { 
  //console.log('entre a control cargye');
}
