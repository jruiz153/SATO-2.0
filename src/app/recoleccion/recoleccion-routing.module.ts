import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ControlRecoleccionComponent } from './control-recoleccion/control-recoleccion.component';
import { CrearPlanillaRecoleccionComponent } from './crear-planilla-recoleccion/crear-planilla-recoleccion.component';
import { MonitorRecoleccionComponent } from './monitor-recoleccion/monitor-recoleccion.component';


/*const routes: Routes = [
    { path: '', component: CrearPlanillaRecoleccionComponent },
    { path: 'crear-planilla-rec', component: CrearPlanillaRecoleccionComponent },
    { path: 'monitor-recoleccion', component: MonitorRecoleccionComponent },
];*/

const routes: Routes = [
  {
  path: '', 
      children: [
        { path: '', component: CrearPlanillaRecoleccionComponent},
        { path: 'crear-planilla-rec', component: CrearPlanillaRecoleccionComponent },
        { path: 'monitor-recoleccion', component: MonitorRecoleccionComponent },
        { path: 'control-recoleccion', component: ControlRecoleccionComponent },
      ]
    }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoleccionRoutingModule {}