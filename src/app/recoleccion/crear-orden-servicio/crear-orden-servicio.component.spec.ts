import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrdenServicioComponent } from './crear-orden-servicio.component';

describe('CrearOrdenServicioComponent', () => {
  let component: CrearOrdenServicioComponent;
  let fixture: ComponentFixture<CrearOrdenServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearOrdenServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
