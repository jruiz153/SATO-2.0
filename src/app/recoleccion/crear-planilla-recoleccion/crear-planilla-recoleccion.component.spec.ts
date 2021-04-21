import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanillaRecoleccionComponent } from './crear-planilla-recoleccion.component';

describe('CrearPlanillaRecoleccionComponent', () => {
  let component: CrearPlanillaRecoleccionComponent;
  let fixture: ComponentFixture<CrearPlanillaRecoleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlanillaRecoleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlanillaRecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
