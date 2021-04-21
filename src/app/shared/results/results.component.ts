import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToolsService } from '../../services/tools.service';
import { SatoService } from '../../services/sato.service';
import { ActivatedRoute, Router } from '@angular/router';

const ELEMEN_DATA: Persona  [] = [
  { id: 1, name: "JAIME RUIZ", carreras:[{id: 1, nombre: 'Carrera'},{id: 2, nombre: 'Carrera 2'} ] },
  { id: 2, name: "AMANDA FIAGA", carreras:[{id: 1, nombre: 'Ing ind'} ] },
  { id: 3, name: "LARURA RUIZ", carreras:[{id: 1, nombre: 'Carrera'},{id: 5, nombre: 'Carrera 2'} ] },
  { id: 4, name: "TERESA PARRA", carreras:[{id: 1, nombre: 'Carrera'},{id: 6, nombre: 'Carrera 2'} ] },
  { id: 5, name: "CARLOS PEREZ" , carreras:[{id: 1, nombre: 'Carrera'},{id: 9, nombre: 'Carrera 2'} ] },
];

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMEN_DATA);
  displayedColumns = ['id', 'name','actions','carreras'];

  num_guia = '';
  guia: any;
  fotos: any[];
  cargandoFotos = false;

  constructor(private satoS: SatoService,public tools:ToolsService, private router: ActivatedRoute) { 
    this.tools.mostrarNavbar();
    this.tools.asignarTituloOpcion('Consulta guía')

    this.router.params.subscribe(params =>{
    this.consultarGuia(params['id'])
    this.num_guia = params['id'];
    })
  }

  ngOnInit(): void {
  }

  onTabClick(event) {
    if(event.tab.textLabel == 'Fotos'){
      this.consultarFotos();
    }
  }

  consultarGuia(id: string){
    this.satoS.consultarGuia(id).subscribe(res=>{
        this.guia = res;
    })
  }

  consultarFotos(){
    this.cargandoFotos = true;
    this.satoS.consultarFotos(this.num_guia).subscribe(res=>{
      this.fotos = res;
      this.cargandoFotos = false;

      if(res.length ==0){
        this.tools.mensaje_error('No se encontrarón fotos.')
      }
    })
  }

  onContextMenuAction1(item: any) {
    alert(`Eliminando.. ${item.id}`);
  }

  onContextMenuAction2(item: any) {
    alert(`Detalles ${item.id}`);
  }

}

export interface Persona {
  id : number;
  name: string;
  carreras: Carrera []
}

export interface Carrera {
  id: number;
  nombre: string;
}
