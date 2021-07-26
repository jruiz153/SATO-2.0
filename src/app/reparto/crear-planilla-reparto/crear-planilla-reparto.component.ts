import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { RepartoService } from '../../services/reparto.service';
import { SatoService } from '../../services/sato.service';
import { AuthService } from '../../services/auth.service';
import { ToolsService } from '../../services/tools.service';
import { UserService } from '../../services/user.service';

//interfaces
import { CC } from '../../interfaces/cc.interface';
import { Empleado } from '../../interfaces/empleado.interface';
import { Oficina } from '../../interfaces/oficina.interface';
import { Reexpedidor } from '../../interfaces/reexpedidor.interface';
import { Contratista } from '../../interfaces/contratista.interface';
import { Tercero } from '../../interfaces/tercero.interface';
import { Ruta } from '../../interfaces/ruta.interface';
import { Frente } from '../../interfaces/frente.interface';
import { Vehiculo } from '../../interfaces/vehiculo.interface';

import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-crear-planilla-reparto',
  templateUrl: './crear-planilla-reparto.component.html',
  styleUrls: ['./crear-planilla-reparto.component.css']
})
export class CrearPlanillaRepartoComponent implements OnInit {
  @ViewChild("myCodRegional") myInputField: ElementRef;
  @ViewChild("myCC") myCC: ElementRef;
  @ViewChild("myPlacaenvia") myPlacaenvia: ElementRef;

  forma: FormGroup;
  acciones_c :any;
  cargando= false;
  cod_regional:number;
  
  ccs :CC[]=[];
  guias :any=[];
  rutas:Ruta[]=[];
  frentes:Frente[]=[];
  operadores:Empleado[]=[];
  conductores:Empleado[]=[];
  array_operadores:Empleado[]=[];

  reexpedidores:Reexpedidor[]=[];
  contratistas:Contratista[]=[];
  terceros:Tercero[]=[];

  vehiculos_terceros:Vehiculo[]=[];
  conductores_terceros:any[]=[];

  //datos control de cargue
  cod_macrozona:number=0;
  nom_macrozona:string;
  cod_zonal:number=0;
  nom_zonal:string;
  nom_operador:string;

  //tipos de liquidacion
  tipos_rx:any[]=[];
  tipos_contratista:any[]=[];
  tipos_tercero:any[]=[];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  tipo_vehiculo = '';
  van = '';

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

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
     //this.opcion_activa = localStorage.getItem('opcion_activa');
  }

  construirFormulario(){
    this.forma = this.fb.group({
      txtPlanilla: [''],
      txtFecha: ['', Validators.required],
      drpEmbalaje: ['', Validators.required],
      drpTipo: ['', Validators.required],
      drpCCs: ['', Validators.required],
      arrOpe: this.fb.array([]),
  
      //Acciones
      rblAccion: [''],
      txtCodRegional: [''],
      txtCodFormaPago: [''],
      txtConsGuiasU: [''],

      //envia
      drpFrente: [''],
      txtPlacaenvia: [''],
      txtCC: [''],
      txtCodigoConductorenvia: [''],
      drpConductorenvia: [''],
      txtCodigoOperador: [''],
      drpOperadorenvia: [''],
      txtCuadrilla: [''],

      //Reexpedidores
      drpReexpedidores: [''],
      drpTipoLiquidacionRX: [''],
      txtCodigoConductorRX: [''],
      drpConductorRX: [''],
      txtCodigoOperadorRX: [''],
      drpOperadorRX: [''],

      //Contratistas
      drpContratistas: [''],
      drpTipoLiquidacionContratista: [''],

      //Terceros
      drpTerceros: [''],
      drpRutasTercero: [''],
      drpVehiculosTercero: [''],
      drpTipoLiquidacionTercero: [''],
      drpConductorTercero: [''],
      drpConductorTerceroTX: [''],

      //Acciones
      txtCCPasa: [''],
      txtCodNovedad: [''],
      txtAclaracion: [''],
    })
  }

  consultarParametrosTipo(){
    if(this.forma.controls.drpTipo.value=='envia'){
      
      if(this.conductores.length==0){
        this.consultarConductores();
      }

      if(this.operadores.length==0){
        this.consultarOperadores();
      }

    }
    else if(this.forma.controls.drpTipo.value=='RX'){
      this.repartoS.consultarReexpedidores(this.cod_regional).subscribe(res => {
        this.reexpedidores = res;
        }
      )

      if(this.conductores.length==0){
        this.consultarConductores();
      }

      if(this.operadores.length==0){
        this.consultarOperadores();
      }

    }
    else if(this.forma.controls.drpTipo.value=='CO'){
      this.repartoS.consultarContratistas(this.cod_regional).subscribe(res => {
        this.contratistas = res;
        }
      )
    }
    else{
      this.repartoS.consultarTerceros(this.cod_regional).subscribe(res => {
        this.terceros = res;
        }
      )

      this.consultarRutas();
      this.consultarConductores();
      this.consultarOperadores();
    }
  }

  //Tipos de liquidacion envia y colaboradores
  tiposLiquidacionRX(){
    const data={
      Cod_Regional:this.cod_regional,
      Cod_Oficina: this.forma.controls.drpReexpedidores.value,
    }
    this.repartoS.consultarTiposLiquidacionRX(data).subscribe(res=>{
      this.tipos_rx =res;
    })
  }

  tiposLiquidacionContratistas(){
    const data={
      Cod_Regional:this.cod_regional,
      Cod_Oficina: this.forma.controls.drpContratistas.value,
    }

    this.repartoS.consultarTiposLiquidacionContB(data).subscribe(res=>{
      this.tipos_contratista =res;

       if(this.tipos_contratista.length===1){
        this.forma.controls.drpTipoLiquidacionContratista.setValue(res[0].Cod_Tipo);
      }

    })
  }

   //Buscar informacion tercero
   consultarTercero(){
    this.repartoS.ConsultarVehiculosTerceros(this.forma.controls.drpTerceros.value).subscribe(res=>{
      this.vehiculos_terceros= res;
    })

    this.repartoS.consultarTiposLiquidacionTercero(this.forma.controls.drpTerceros.value).subscribe(rest=>{
      this.tipos_tercero= rest;
    })

    this.repartoS.ConsultarConductoresTerceros(this.forma.controls.drpTerceros.value).subscribe(res2=>{
      this.conductores_terceros =res2;
    })
  }

  //Controles de cargue
  adicionarCC(){
    const data={
      Cod_Regional: this.cod_regional,
      Num_ControlC: this.forma.controls.txtCC.value,
    }

    this.repartoS.consultarControlCargue(data).subscribe((res:any)=>{
      
      if(res.Cod_Regional >0 && (res.Estado_ControlC !='CE' && res.Estado_ControlC !='AN')){
            this.cod_macrozona = res.Cod_RutaR;
            this.nom_macrozona = res.Nom_Ruta;
            this.cod_zonal = res.Cod_ZonaL;
            this.nom_zonal = res.Nom_ZonaL;

            //if(this.forma.controls.drpTipo.value=='envia'){
              const dataf={
                Cod_Regional: this.cod_regional,
                Cod_RutaR: res.Cod_RutaR,
                Mca_TEmbalaje: res.Mca_TEmbalaje
              }

              this.satoS.consultarFrentes(dataf).subscribe(resf=>{
                this.frentes = resf;
              })
            //}

            this.ccs.push({num_controlc: data.Num_ControlC});

            this.repartoS.consultarGuiasControlCargue(data).subscribe(res=>{
              this.guias.push(...res);
            })

            this.forma.controls.txtCC.setValue('');
            this.tools.mensaje_ok('CC adicionado')
      }
      else{
        //input.value = '';
        this.tools.mensaje_error('Error: CC no existe o esta cerrado!')
      }
    })
  }

  addCC(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    const data={
      Cod_Regional: this.cod_regional,
      Num_ControlC: value.trim(),
    }

    this.repartoS.consultarControlCargue(data).subscribe((res:any)=>{
      
      if(res.Cod_Regional >0 && (res.Estado_ControlC !='CE' && res.Estado_ControlC !='AN')){
            this.cod_macrozona = res.Cod_RutaR;
            this.nom_macrozona = res.Nom_Ruta;
            this.cod_zonal = res.Cod_ZonaL;
            this.nom_zonal = res.Nom_ZonaL;

              const dataf={
                Cod_Regional: this.cod_regional,
                Cod_RutaR: res.Cod_RutaR,
                Mca_TEmbalaje: res.Mca_TEmbalaje
              }

              this.satoS.consultarFrentes(dataf).subscribe(resf=>{
                this.frentes = resf;
              })

              this.ccs.push({num_controlc: value.trim()});

            this.repartoS.consultarGuiasControlCargue(data).subscribe(res=>{
              this.guias.push(...res);
            })

            if (input) {
              input.value = '';
            }

            this.forma.controls.txtCC.setValue('');
            this.tools.mensaje_ok('CC adicionado')
      }
      else{
        //input.value = '';
        this.tools.mensaje_error('Error: CC no existe o esta cerrado!')
      }
    })

    /*this.repartoS.consultarControlCargue(data).subscribe((res:any)=>{
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
    })*/
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

  consultarConductores(){
    const data={
      Cod_Regional:this.cod_regional,
    }
    this.satoS.consultarConductores(data).subscribe(res=>{
      this.conductores =res;
    },
    err=>{
      this.tools.mensaje_error("Error consultando conductores")
      }
    )

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

  consultarRutas(){
    const data={
      Cod_Regional: this.cod_regional,
      Mca_TEmbalaje: this.forma.controls.drpEmbalaje.value
    }

    this.repartoS.consultarRutas(data).subscribe(res=>{
      this.rutas =res;
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

  buscarCodigo(){
    
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
