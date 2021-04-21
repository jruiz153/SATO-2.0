import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDescargueMtComponent } from './control-descargue-mt.component';

describe('ControlDescargueMtComponent', () => {
  let component: ControlDescargueMtComponent;
  let fixture: ComponentFixture<ControlDescargueMtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDescargueMtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDescargueMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
