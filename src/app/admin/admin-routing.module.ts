import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component';
import { IngresarUsuarioComponent } from './ingresar-usuario/ingresar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';


const routes: Routes = [
    { path: 'consultar-usuarios', component: ConsultarUsuariosComponent },
    { path: 'ingresar-usuario', component: IngresarUsuarioComponent },
    { path: 'detalle-usuario/:id', component: DetalleUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}