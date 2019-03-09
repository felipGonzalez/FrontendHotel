import { TestBed } from '@angular/core/testing';

import { HabitacionService } from './habitacion.service';

describe('HabitacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabitacionService = TestBed.get(HabitacionService);
    expect(service).toBeTruthy();
  });
});
