import { TestBed } from '@angular/core/testing';

import { ReservaHabitacionService } from './reserva-habitacion.service';

describe('ReservaHabitacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservaHabitacionService = TestBed.get(ReservaHabitacionService);
    expect(service).toBeTruthy();
  });
});
