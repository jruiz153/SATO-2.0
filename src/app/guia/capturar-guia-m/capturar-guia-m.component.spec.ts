import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturarGuiaMComponent } from './capturar-guia-m.component';

describe('CapturarGuiaMComponent', () => {
  let component: CapturarGuiaMComponent;
  let fixture: ComponentFixture<CapturarGuiaMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturarGuiaMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturarGuiaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
