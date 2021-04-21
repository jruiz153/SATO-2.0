import { Component,EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SatoService } from '../../services/sato.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  public data$: Observable<any[]>;
  public keyword = 'Nom_Ciudad';
  isLoading = false;

  @Output() enviar: EventEmitter<any>;
  @Input() placeholder;

  constructor(private satoS: SatoService) { 
    this.enviar = new EventEmitter();
  }

  ngOnInit(): void {
  }
  //cuando hace clic sobre el registro dispara el evento, y es recibido en el padre con la propiedad (enviar)='recibirMensajeO($event)'
  selectEvent(item) {
    this.enviar.emit(item);
  }

  getServerResponse(event) {
    this.data$ = this.satoS.consultarCiudadesLetra(event);
  }

  searchCleared() {
    this.data$ = null;
  }

}
