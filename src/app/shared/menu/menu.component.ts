import { AutofillEvent } from '@angular/cdk/text-field';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ToolsService } from '../../services/tools.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  acciones: any = [];

  constructor(public tools: ToolsService, public auth: AuthService, private userS: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
      this.auth.logout();
  }

  onToggleSidenav(opcion, link): void{
     const data={
      Cod_Usuario: this.auth.UsuarioEnviaNet,
      Nom_Opcion: opcion
    } 
    
    localStorage.setItem('opcion_activa', opcion);
    this.userS.asignarOpcion(opcion);
    this.toggleSidenav.emit();
  }

}

