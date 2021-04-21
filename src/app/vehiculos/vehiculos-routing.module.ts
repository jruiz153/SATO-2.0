import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProgramarVehiculoComponent } from './programar-vehiculo/programar-vehiculo.component';


const routes: Routes = [
    { path: 'programar-vehiculo', component: ProgramarVehiculoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule {}