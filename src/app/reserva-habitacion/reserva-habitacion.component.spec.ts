import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHabitacionComponent } from './reserva-habitacion.component';

describe('ReservaHabitacionComponent', () => {
  let component: ReservaHabitacionComponent;
  let fixture: ComponentFixture<ReservaHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
