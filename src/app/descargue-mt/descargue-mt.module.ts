import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramarDescargueComponent } from './programar-descargue/programar-descargue.component';
import { DescargueMtRoutingModule } from './descargue-mt-routing.module';
import { MaterialModule } from '../modules/material.module';
import { ControlDescargueMtComponent } from './control-descargue-mt/control-descargue-mt.component';
import { ReporteGerencialMtComponent } from './reporte-gerencial-mt/reporte-gerencial-mt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProgramarDescargueComponent, ControlDescargueMtComponent, ReporteGerencialMtComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DescargueMtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DescargueMtModule { 
  constructor(){
   }
}
