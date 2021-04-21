import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ToolsService } from './services/tools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav_position: string = 'start';

  constructor(public tools: ToolsService){
  }

  toggle(x): void {
    alert("kaiem" + x)
    //htmlRef.toggle();
  }
  
 /*  onTogglePosition(position: string) {
    this.nav_position = position === 'start' ? 'end' : 'start';
  } */

}
