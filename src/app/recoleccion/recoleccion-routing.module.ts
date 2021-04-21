import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CrearPlanillaRecoleccionComponent } from './crear-planilla-recoleccion/crear-planilla-recoleccion.component';
import { MonitorRecoleccionComponent } from './monitor-recoleccion/monitor-recoleccion.component';


const routes: Routes = [
    { path: 'crear-planilla-rec', component: CrearPlanillaRecoleccionComponent },
    { path: 'monitor-recoleccion', component: MonitorRecoleccionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoleccionRoutingModule {}