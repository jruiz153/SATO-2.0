import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolsService } from '../../services/tools.service';
import { SatoService } from '../../services/sato.service';

@Component({
  selector: 'app-programar-vehiculo',
  templateUrl: './programar-vehiculo.component.html',
  styleUrls: ['./programar-vehiculo.component.css']
})
export class ProgramarVehiculoComponent implements OnInit {
  forma: FormGroup;
  regionales: any = [];
  cargando = false;
  
  constructor(private fb: FormBuilder,private satoService: SatoService,public tools: ToolsService) { 

    this.forma = this.fb.group({
      drpRegionales: ['', Validators.required],
      txtFechaIni: ['', Validators.required],
    })

    this.tools.mostrarNavbar();
    this.tools.asignarTituloOpcion('Programacion vehiculos')
    this.cargarRegionales();
  }

  ngOnInit(): void {
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
