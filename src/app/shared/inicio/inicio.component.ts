import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public tools: ToolsService) { }

  ngOnInit(): void {
    this.tools.asignarTituloOpcion('Inicio')
    this.tools.mostrarNavbar();
  }

}
