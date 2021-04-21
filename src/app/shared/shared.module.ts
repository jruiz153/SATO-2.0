import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { LoadingComponent } from './loading/loading.component';
import { InicioComponent } from './inicio/inicio.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AutocompleteOperadoresComponent } from './autocomplete/autocomplete-operadores/autocomplete-operadores.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [NavbarComponent, 
    HeaderComponent, 
    MenuComponent, 
    SearchComponent, 
    ResultsComponent, 
    LoadingComponent, 
    InicioComponent, 
    AutocompleteComponent, 
    AutocompleteOperadoresComponent, 
    MensajesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  exports: [
    LoadingComponent,
    AutocompleteComponent,
    AutocompleteOperadoresComponent,
    HeaderComponent,
    MenuComponent,
    NavbarComponent,
    SearchComponent,
    MensajesComponent
  ]
})
export class SharedModule { }
