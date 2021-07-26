import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PlanillaRecoleccion } from '../interfaces/planilla-recoleccion.interface';
import { OS } from '../interfaces/os.interface';

@Injectable({
  providedIn: 'root'
})
export class RecoleccionService {

  private url = environment.url; //api del programa

  constructor(protected http: HttpClient) { }

  consultarPlanillasRecoleccionMonitor(data): Observable<PlanillaRecoleccion[]>{
    console.log(data)
    return this.http.post<PlanillaRecoleccion[]>(`${ this.url }recoleccion/ConsultarPlanillasRecoleccionMonitor/`,data);
  }

  consultarOSsPlanillaRecoleccionMonitor(data): Observable<OS[]>{
    console.log(data)
    return this.http.post<OS[]>(`${ this.url }recoleccion/ConsultarOSsMonitorRecoleccion/`,data);
  }

  /* consultarOSsPlanillaRecoleccion(data): Observable<OS[]>{
    return this.http.post<OS[]>(`${ this.url }recoleccion/ConsultarPlanillasRecoleccionMonitor/`,data);
  } */

  consultarResumenPlanillaRecoleccion(data): Observable<any[]>{
    return this.http.post<any[]>(`${ this.url }recoleccion/ConsultarResumenPlanillaMonitor/`,data);
  }

  
}
