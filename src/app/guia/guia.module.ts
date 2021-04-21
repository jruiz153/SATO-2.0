import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapturarGuiaComponent } from './capturar-guia/capturar-guia.component';
import { GuiaRoutingModule } from './guia-routing.module';
import { CapturarGuiaMComponent } from './capturar-guia-m/capturar-guia-m.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CapturarGuiaComponent, CapturarGuiaMComponent],
  imports: [
    CommonModule,
    GuiaRoutingModule,
    CommonModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ]
})
export class GuiaModule { }
