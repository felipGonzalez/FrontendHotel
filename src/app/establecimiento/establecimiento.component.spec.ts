import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientoComponent } from './establecimiento.component';

describe('EstablecimientoComponent', () => {
  let component: EstablecimientoComponent;
  let fixture: ComponentFixture<EstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
