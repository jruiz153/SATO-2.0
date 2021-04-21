import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SatoService } from 'src/app/services/sato.service';
import { ToolsService } from '../../services/tools.service';


@Component({
  selector: 'app-programar-descargue',
  templateUrl: './programar-descargue.component.html',
  styleUrls: ['./programar-descargue.component.css']
})
export class ProgramarDescargueComponent implements OnInit {
  forma: FormGroup;
  regionales: any = [];
  cargando = false;
  
  constructor(private fb: FormBuilder,private satoService: SatoService,public tools: ToolsService){

      this.forma = this.fb.group({
        drpRegionales: ['', Validators.required],
        txtFechaIni: ['', Validators.required],
      })

    this.tools.mostrarNavbar();
    this.tools.asignarTituloOpcion('Programar descargue')
   }

  ngOnInit(): void {
    this.cargarRegionales();
  }
  consultar(){

  }

  cargarRegionales(){
    this.satoService.consultarRegionales()
      .subscribe( res => {
        this.regionales = res;
      },
      err => {
        alert(err);
      });
  }
}

