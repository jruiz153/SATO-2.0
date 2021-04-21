import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CapturarGuiaComponent } from './capturar-guia/capturar-guia.component';


const routes: Routes = [
    { path: 'capturar-guia', component: CapturarGuiaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiaRoutingModule {}