import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRecoleccionComponent } from './control-recoleccion.component';

describe('ControlRecoleccionComponent', () => {
  let component: ControlRecoleccionComponent;
  let fixture: ComponentFixture<ControlRecoleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRecoleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlRecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
