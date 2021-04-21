import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  
  constructor(public tools: ToolsService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  onToggleSidenav(): void{
    this.tools.cambiarPosicionMenu('start')
    this.toggleSidenav.emit();
  }

}
