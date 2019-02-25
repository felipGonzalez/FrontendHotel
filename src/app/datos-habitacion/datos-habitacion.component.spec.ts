import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosHabitacionComponent } from './datos-habitacion.component';

describe('DatosHabitacionComponent', () => {
  let component: DatosHabitacionComponent;
  let fixture: ComponentFixture<DatosHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
