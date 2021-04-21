import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  forma: FormGroup;

  constructor(private router:Router, private fb: FormBuilder) {
    this.forma = this.fb.group({
      txtGuia: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  buscar(){
    this.router.navigate(['/results',this.forma.get('txtGuia').value]);
  }

  submit(){

  }

}
