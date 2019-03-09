import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoReservaComponent } from './tipo-reserva.component';

describe('TipoReservaComponent', () => {
  let component: TipoReservaComponent;
  let fixture: ComponentFixture<TipoReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
