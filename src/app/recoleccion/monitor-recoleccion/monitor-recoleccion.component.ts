import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ToolsService } from '../../services/tools.service';
import { UserService } from '../../services/user.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { SatoService } from '../../services/sato.service';
import { OS } from '../../interfaces/os.interface';
import { AuthService } from '../../services/auth.service';
import { RecoleccionService } from 'src/app/services/recoleccion.service';
import { PlanillaRecoleccion } from '../../interfaces/planilla-recoleccion.interface';

@Component({
  selector: 'app-monitor-recoleccion',
  templateUrl: './monitor-recoleccion.component.html',
  styleUrls: ['./monitor-recoleccion.component.css']
})
export class MonitorRecoleccionComponent implements OnInit {
  @ViewChild("myCodRegional") myInputField: ElementRef;

  forma: FormGroup;
  acciones_c :any;
  cargando= false;
  cod_regional:number;
  planilla:number=0;

  zonas:any=[];
  planillas:PlanillaRecoleccion[]=[];
  oss:OS[]=[];
  cuentas:any=[];
  resumen:any=[];
  os:OS;

  cargandoPlanillas = false;
  cargandoOSs = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  opcion_activa = "";
  registro_activo: number = -1;
  os_activo: number = -1;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private fb: FormBuilder, 
              public tools: ToolsService, 
              public userS: UserService, 
              private satoS:SatoService,
              private recoleccionS: RecoleccionService,
              private authS:AuthService) {
              
              this.construirFormulario();
    
   }

  ngOnInit(): void {
    this.cod_regional = this.authS.cod_regional;
    this.tools.mostrarNavbar();
    this.tools.asignarTituloOpcion('Monitor de recolección');
    this.consultarZonas();
    //this.consultarOSsPlanilla(this.authS.cod_regional,0);
  }

  construirFormulario(){
    this.forma = this.fb.group({
      txtPlanilla: [''],
      txtFecha: ['', Validators.required],
      drpEmbalaje: ['', Validators.required],
      drpCCs: ['', Validators.required],
      drpTipo: ['', Validators.required],
      drpZona: [''],
      drpOperador: [''],
      txtCC: [''],
      txtCodigoOperador: [''],
      txtCuenta: [''],
      drpCuentas: [''],
      chkClientesCelulares: [''],
      chkAccion: [''],
      drpAccion: ['']
     
    })
  }

  consultarZonas(){
    this.cod_regional = 1;
    this.satoS.consultarZonasLogisitcas(this.cod_regional).subscribe(res=>{
      this.zonas = res;
    })
  }

  adicionarCuenta(){
    this.cuentas.push(
      {
        Cuenta:  this.forma.controls.txtCuenta.value
      })
  }

  //consultar planillas de recoleccion
  consultar(){
    const data = {
      Cod_RegionalP:this.authS.cod_regional,
      Mca_TEmbalaje:this.forma.controls.drpEmbalaje.value,
      Cod_ZonaL:this.forma.controls.drpZona.value,
    }

    this.cargandoPlanillas = true;

    this.recoleccionS.consultarPlanillasRecoleccionMonitor(data).subscribe(res=>{
      this.planillas = res;
      this.cargandoPlanillas = false;
    })
  }

  consultarPlanilla(planilla: PlanillaRecoleccion, index: number){
    this.planilla=planilla.Num_PlanillaR;
    this.registro_activo = index;
    this.os_activo = -1;
    this.os = null;
    
    const data = {
      Cod_Regional:planilla.Cod_Regional,
      Num_PlanillaR:planilla.Num_PlanillaR,
    }

    this.recoleccionS.consultarResumenPlanillaRecoleccion(data).subscribe(res=>{
      this.resumen = res;
    })

    this.consultarOSsPlanilla(planilla.Cod_Regional,planilla.Num_PlanillaR);
  }

  consultarOSsPlanilla(cod_regional:number, planilla:number){
    const data_planilla = {
      Cod_Regional:cod_regional,
      Num_PlanillaR:planilla,
      Mca_TEmbalaje:this.forma.controls.drpEmbalaje.value,
      FecProceso:'',
      PorFecha:0,
      DirFecha:0,
      FilFecha:'',
      PorCuenta:0,
      DirTipo:0,
      Cuenta:'',
      PorTipCliente:0,
      DirTipoCli:0,
      TiposCliente:0,
      EstadoOrdenS:'',
    }

    this.cargandoOSs = true;
    this.recoleccionS.consultarOSsPlanillaRecoleccionMonitor(data_planilla).subscribe(res=>{
      this.oss = res;
      this.cargandoOSs = false;
      
      if(this.oss.length === 0){
        this.tools.mensaje_error('No hay ordenes de servicio asignadas a la planilla ' + planilla);
      }

    },
    err => {
      this.tools.mensaje_error('Error cargando OSs');
      this.cargandoOSs = false;
    }
    )
  }

  detalleOS(os: OS, index: number){
    this.os_activo = index;
    this.os = os;
  }

  asignarOSPlanilla(planilla:number){
    this.tools.mensaje_ok("Orden se servicio asignada");
  }
}
