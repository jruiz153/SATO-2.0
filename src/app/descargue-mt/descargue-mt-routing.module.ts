import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProgramarDescargueComponent } from './programar-descargue/programar-descargue.component';
import { ReporteGerencialMtComponent } from './reporte-gerencial-mt/reporte-gerencial-mt.component';


const routes: Routes = [
    { path: 'programar-descargue-mt', component: ProgramarDescargueComponent },
    { path: 'reporte-gerencial-mt', component: ReporteGerencialMtComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescargueMtRoutingModule {}