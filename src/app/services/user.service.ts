import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private url = environment.url; //api del programa
    acciones_s: any=[];
    valor ="";
    opcion = "";
  
    constructor(protected http: HttpClient) { 
      this.valor ="jaime andres ruiz";
    }
  
    consultarUsuarios(data): Observable<any>{
      return this.http.post<any>(`${ this.url }user/consultarusuariossato/`,data);
    }

    consultarDetalleUsuario(data): Observable<any>{
        return this.http.post<any>(`${ this.url }user/ConsultarDetalleUsuarioSATO/`,data);
    }

    consultarOpcionesUsuario(id): Observable<any>{
        return this.http.get<any>(`${ this.url }user/ConsultarOpcionesUsuario/` + id);
    }

    consultarAccionesOpcion(data): Observable<any>{
        return this.http.post<any>(`${ this.url }user/ConsultarAccionesOpcion/`, data);
    }

    asignarOpcion(texto: string) {
      this.opcion = texto;
    }

    consultarAccionesOpcionUsuario(data): Observable<any>{
      return this.http.post<any>(`${ this.url }user/ConsultarAccionesOpcionUsuario/`, data);
    } 

    /*consultarAccionesOpcionUsuario(usuario: string, opcion: string) {
      const data={
        Cod_Usuario: usuario,
        Nom_Opcion: opcion
      }
      return this.http.post(`${ this.url }user/ConsultarAccionesOpcionUsuario/`,data).subscribe((data: any) => {
        this.acciones_s = data;
      }); 

     }*/
  }