import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

/*modulos propios*/
import { MaterialModule } from './modules/material.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { DescargueMtModule } from './descargue-mt/descargue-mt.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { GuiaModule } from './guia/guia.module';
import { ControlCargueModule } from './control-cargue/control-cargue.module';
import { RepartoModule } from './reparto/reparto.module';
import { RecoleccionModule } from './recoleccion/recoleccion.module';

import { LoginComponent } from './auth/login/login.component';
import { ToolsService } from './services/tools.service';
import { UserService } from './services/user.service';

import { MAT_DATE_LOCALE } from '@angular/material/core'
import { RepartoService } from './services/reparto.service';
import { RecoleccionService } from './services/recoleccion.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    DescargueMtModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    VehiculosModule,
    AdminModule,
    GuiaModule,
    ControlCargueModule,
    RepartoModule,
    RecoleccionModule,
  ],
  providers: [ToolsService,UserService,RepartoService,RecoleccionService, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
