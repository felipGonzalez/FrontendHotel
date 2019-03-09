import { TestBed } from '@angular/core/testing';

import { CreateHabitacionService } from './create-habitacion.service';

describe('CreateHabitacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateHabitacionService = TestBed.get(CreateHabitacionService);
    expect(service).toBeTruthy();
  });
});
