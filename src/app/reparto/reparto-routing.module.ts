import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CrearPlanillaRepartoComponent } from './crear-planilla-reparto/crear-planilla-reparto.component';


const routes: Routes = [
    { path: 'crear-planilla-rep', component: CrearPlanillaRepartoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartoRoutingModule {}