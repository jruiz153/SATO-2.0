import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRepartoComponent } from './control-reparto.component';

describe('ControlRepartoComponent', () => {
  let component: ControlRepartoComponent;
  let fixture: ComponentFixture<ControlRepartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRepartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
