import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { RepartoService } from '../../services/reparto.service';
import { SatoService } from '../../services/sato.service';
import { AuthService } from '../../services/auth.service';
import { ToolsService } from '../../services/tools.service';
import { UserService } from '../../services/user.service';

import { CC } from '../../interfaces/cc.interface';
import { Contratista } from '../../interfaces/contratista.interface';
import { Reexpedidor } from '../../interfaces/reexpedidor.interface';

import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-crear-planilla-reparto',
  templateUrl: './crear-planilla-reparto.component.html',
  styleUrls: ['./crear-planilla-reparto.component.css']
})
export class CrearPlanillaRepartoComponent implements OnInit {
  @ViewChild("myCodRegional") myInputField: ElementRef;

  forma: FormGroup;
  acciones_c :any;
  cargando= false;
  cod_regional:number=1;
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  opcion_activa = "";
  
  guias :any=[];
  operadores :any=[];
  tipos_liquidacion:any=[];

  ccs :CC[]=[];
  reexpediores : Reexpedidor[]=[];
  contratistas : Contratista[]=[];

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private fb: FormBuilder, 
              public tools: ToolsService, 
              public userS: UserService, 
              private satoS:SatoService,
              private repartoS: RepartoService,
              private authS: AuthService) {

    

    this.forma = this.fb.group({
      txtPlanilla: [''],
      txtFecha: ['', Validators.required],
      drpEmbalaje: ['', Validators.required],
      drpTipo: ['', Validators.required],
      drpCCs: ['', Validators.required],
      drpOperador: [''],
      txtCC: [''],
      txtCodigoOperador: [''],

      drpContratistas: [''],
      drpTiposLiquidacionB: [''],
    })
   }

   ngOnInit(): void {
     this.cod_regional= this.authS.cod_regional;
     this.tools.mostrarNavbar();
     this.tools.asignarTituloOpcion('Crear planilla de reparto');
     this.opcion_activa = localStorage.getItem('opcion_activa');
  }

  consultarParametrosTipo(){
    const tipo = this.forma.controls.drpTipo.value;

    if(tipo==='RX'){

    }
    else if(tipo==='CO'){
      this.consultarContratistas();
      this.tools.mensaje_ok('Constratistas cargados')
    }
    else if(tipo==='TERCEROS'){

    }
    else{

    }


  }

  addCC(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    const data={
      Cod_Regional: this.cod_regional,
      Num_ControlC: value.trim(),
    }

    this.repartoS.consultarControlCargue(data).subscribe((res:any)=>{
      if(res.Cod_Regional >0){
          if ((value || '').trim()) {
            this.ccs.push({num_controlc: value.trim()});

            this.repartoS.consultarGuiasControlCargue(data).subscribe(res=>{
              this.guias.push(...res);
            })
          }
      
          if (input) {
            input.value = '';
          }
      }
      else{
        input.value = '';
        this.tools.mensaje_error('CC no existe')
      }
    })
  }

  removeCC(cc:any): void {
    const index = this.ccs.indexOf(cc);

    if (index >= 0) {
      this.ccs.splice(index, 1);
    }
  }

  adicionarGuia(){
    this.guias.push(
      { 
        Cod_Regional: this.forma.controls.txtCodRegional.value, 
        Cod_FormaPago: this.forma.controls.txtCodFormaPago.value,
        Cons_GuiasU: this.forma.controls.txtConsGuiasU.value,
        Estado:'hola', 
        CP:'No'})

    this.limpiarControles();
  }

  consultarOperadores(){
    const data={
      Cod_Regional:this.cod_regional,
      Nom_Empleado:"",
      Tipo:"todos",
    }
    this.satoS.consultarOperadores(data).subscribe(res=>{
      this.operadores =res;
    },
    err=>{
      alert("Error consultando operadores")
      }
    )
  }

  consultarReexpedidores(){
    const data={
      Cod_Regional:this.cod_regional,
    }
    this.repartoS.consultarReexpedidores(data).subscribe(res=>{
      this.reexpediores =res;
    })
  }

  consultarContratistas(){
    const data={
      Cod_Regional:this.cod_regional,
    }
    this.repartoS.consultarContratistas(data).subscribe(res=>{
      this.contratistas =res;
    })
  }

  consultarTiposLiquidacionContratistas(){
    const data={
      Cod_Regional:this.cod_regional,
      Cod_Oficina:this.forma.controls.drpContratistas.value,
    }

    this.repartoS.consultarTiposLiquidacionContB(data).subscribe(res=>{
      this.tipos_liquidacion =res;
    })
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
