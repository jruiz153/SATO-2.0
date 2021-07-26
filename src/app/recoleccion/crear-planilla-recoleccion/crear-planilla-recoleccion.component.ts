import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OS } from 'src/app/interfaces/os.interface';
import { Vehiculo } from 'src/app/interfaces/vehiculo.interface';
import { AuthService } from 'src/app/services/auth.service';
import { RepartoService } from 'src/app/services/reparto.service';
import { SatoService } from 'src/app/services/sato.service';
import { ToolsService } from 'src/app/services/tools.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crear-planilla-recoleccion',
  templateUrl: './crear-planilla-recoleccion.component.html',
  styleUrls: ['./crear-planilla-recoleccion.component.css']
})
export class CrearPlanillaRecoleccionComponent implements OnInit {
  @ViewChild("myCodRegional") myInputField: ElementRef;
  forma: FormGroup;
  cod_regional:number=0;
  opcion_activa = "";

  vehiculo:Vehiculo;
  oss:OS[]=[];
  operadores :any=[];

  cargando= false;
  
  constructor(private fb: FormBuilder, 
    public tools: ToolsService, 
    public userS: UserService, 
    private satoS:SatoService,
    private repartoS: RepartoService,
    private authS: AuthService) {

      this.construirFormulario();
     }

  ngOnInit(): void {
     this.cod_regional= this.authS.cod_regional;
     this.tools.mostrarNavbar();
     this.tools.asignarTituloOpcion('Crear planilla de reparto');
     this.opcion_activa = localStorage.getItem('opcion_activa');
  }

  construirFormulario(){
    this.forma = this.fb.group({
      txtPlanilla: [''],
      txtFecha: ['', Validators.required],
      drpEmbalaje: ['', Validators.required],
      drpTipo: ['', Validators.required],
      drpCCs: ['', Validators.required],
      drpOperador: [''],
      txtCC: [''],
      txtCodigoOperador: [''],

      txtCodigoZona: [''],
      drpZona: [''],
      txtCodigoFrente: [''],
      drpFrente: [''],

      txtPlaca: [''],
      txtTipoPlaca: [''],
    })
  }

  buscarCodigo(){
    
  }

  buscarCodigoConduce(){

  }

  buscarPlaca(){

  }


  grabar(){

  }

  anular(){
    
  }

  nuevo(){
    
  }

  imprimir(){
    
  }

  limpiarControles(){
    this.forma.controls.txtCodRegional.setValue('');
    this.forma.controls.txtCodFormaPago.setValue('');
    this.forma.controls.txtConsGuiasU.setValue('');
    this.myInputField.nativeElement.focus();
  }

}
