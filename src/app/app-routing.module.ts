import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResultsComponent } from './shared/results/results.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { AdminModule } from './admin/admin.module';
import { RepartoModule } from './reparto/reparto.module';

const routes: Routes = [
  //{ path: '**', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
  { path: 'guia', loadChildren: () => import(`./guia/guia.module`).then(m => m.GuiaModule) },
  { path: 'cc', loadChildren: () => import(`./control-cargue/control-cargue.module`).then(m => m.ControlCargueModule) },
  { path: 'reparto', loadChildren: () => import(`./reparto/reparto.module`).then(m => m.RepartoModule) },
  { path: 'recoleccion', loadChildren: () => import(`./recoleccion/recoleccion.module`).then(m => m.RecoleccionModule) },
  { path: 'descargue-mt', loadChildren: () => import(`./descargue-mt/descargue-mt.module`).then(m => m.DescargueMtModule) },
  { path: 'vehiculos', loadChildren: () => import(`./vehiculos/vehiculos.module`).then(m => m.VehiculosModule) },
  { path: 'results/:id', component: ResultsComponent },
  { path: 'inicio', component: InicioComponent },
  /*  */
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
