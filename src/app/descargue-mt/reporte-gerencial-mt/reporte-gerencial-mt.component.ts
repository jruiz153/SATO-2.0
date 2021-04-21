import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolsService } from '../../services/tools.service';
import { SatoService } from '../../services/sato.service';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-reporte-gerencial-mt',
  templateUrl: './reporte-gerencial-mt.component.html',
  styleUrls: ['./reporte-gerencial-mt.component.css']
})
export class ReporteGerencialMtComponent implements OnInit {
  forma: FormGroup;
  regionales: any = [];
  reporte: any = [];
  cargando = false;
  mostrar_info = false;
  total_despachado = 0;
  total_descargadas = 0;
  total_nov_descargue = 0;
  total_diferencia = 0;
  total_nov_solucionadas = 0;

  total_disp_urbano = 0;
  total_disp_cadenas = 0;
  total_disp_domesticas = 0;
  total_disponible = 0;

  total_entregadas = 0;
  total_reparto = 0;
  total_nov_reparto = 0;
  total_muelle = 0;
  total_van = 0;
  total_oe = 0;
  
  constructor(private fb: FormBuilder,
              private satoService: SatoService,
              private tools: ToolsService) {
           
              this.forma = this.fb.group({
                drpRegionales: ['', Validators.required],
                txtFechaIni: ['', Validators.required],
              })
  }

  ngOnInit(): void {
    this.tools.asignarTituloOpcion('Reporte gerencial MT')
    this.tools.mostrarNavbar();
    this.cargarRegionales();
  }

  consultar(){
    var f1 ='';
    f1 = this.forma.get('txtFechaIni').value.toJSON().slice(0, 10).split('-').reverse().join('/');

    const data = {
      cod_regional: this.forma.get('drpRegionales').value,
      f1: f1,
    }

    this.cargando = true;

    this.satoService.consultarReporteGerencialMT(data)
    .subscribe( res => {
      this.reporte = res[0];
      this.mostrar_info = true;
      console.log(res[0])

      this.total_despachado = res[0].UniUrb + res[0].UniCad + + res[0].UniDom + res[0].UniTran;
      this.total_descargadas = res[0].UniDesUrb + res[0].UniDesCad + + res[0].UniDesDom + res[0].UniDesTra;
      this.total_nov_descargue = res[0].UniDesUrbNov78 + res[0].UniDesCadNov78 + + res[0].UniDesDomNov78 + res[0].UniDesTraNov78;
      this.total_nov_solucionadas = res[0].UniNovNovSolUrb + res[0].UniNovNovSolCad + + res[0].UniNovNovSolDom + res[0].UniNovNovSolTra;

      this.total_disp_urbano = (res[0].UniDesUrb + res[0].UniNovNovSolUrb) - res[0].UniDesUrbNov78;
      this.total_disp_cadenas = (res[0].UniDesCad + res[0].UniNovNovSolCad) - res[0].UniDesCadNov78;
      this.total_disp_domesticas = (res[0].UniDesDom + res[0].UniNovNovSolDom) - res[0].UniDesDomNov78;
      this.total_disponible = this.total_disp_urbano + this.total_disp_cadenas + this.total_disp_domesticas;

      this.total_entregadas = (res[0].UniEntregadasUrb + res[0].UniEntNovSolUrb) + (res[0].UniEntregadasCad + res[0].UniEntNovSolCad) + (res[0].UniEntregadasDom + res[0].UniEntNovSolDom);
      this.total_reparto = res[0].UniRepartoUrb + res[0].UniRepNovSolUrb;
      this.total_nov_reparto = res[0].NovedadUrbano + res[0].NovedadCadena + res[0].NovedadDomesticas;
      this.total_muelle = res[0].MuelleUrb + res[0].MuelleCad + res[0].MuelleDom;
      this.total_van = res[0].VanUrb + res[0].VanCad + res[0].VanDom;
      this.total_oe = res[0].UniOEUrb + res[0].UniOECad + res[0].UniOEDom;

      this.cargando = false;
    },
    err => {
      this.mostrar_info = false;
      this.cargando = false;
    });
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
