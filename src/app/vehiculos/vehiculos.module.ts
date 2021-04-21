import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramarVehiculoComponent } from './programar-vehiculo/programar-vehiculo.component';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProgramarVehiculoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VehiculosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
  ],
})


export class VehiculosModule {
  constructor(){
    //console.log('caargue modulo vehiculos')
   }
}
