import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CrearControlCargueComponent } from './crear-control-cargue/crear-control-cargue.component';


const routes: Routes = [
    { path: 'crear-cc', component: CrearControlCargueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlCargueRoutingModule {}