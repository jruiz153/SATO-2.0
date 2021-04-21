import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarUsuariosComponent } from './consultar-usuarios/consultar-usuarios.component';
import { IngresarUsuarioComponent } from './ingresar-usuario/ingresar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [ConsultarUsuariosComponent, IngresarUsuarioComponent, DetalleUsuarioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
