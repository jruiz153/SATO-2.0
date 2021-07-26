import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CrearControlCargueComponent } from '../control-cargue/crear-control-cargue/crear-control-cargue.component';
import { CrearPlanillaRepartoComponent } from './crear-planilla-reparto/crear-planilla-reparto.component';
import { ControlRepartoComponent } from './control-reparto/control-reparto.component';


const routes: Routes = [
    { 
      path: '', 
      children: [
        {path: '', component: CrearPlanillaRepartoComponent},
        { path: 'crear-planilla-rep', component: CrearPlanillaRepartoComponent },
        { path: 'crear-cc', component: CrearControlCargueComponent },
        { path: 'control-reparto', component: ControlRepartoComponent },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartoRoutingModule {}