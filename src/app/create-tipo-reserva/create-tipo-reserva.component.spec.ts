import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoReservaComponent } from './create-tipo-reserva.component';

describe('CreateTipoReservaComponent', () => {
  let component: CreateTipoReservaComponent;
  let fixture: ComponentFixture<CreateTipoReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTipoReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
