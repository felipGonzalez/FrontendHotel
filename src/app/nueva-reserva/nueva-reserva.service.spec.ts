import { TestBed } from '@angular/core/testing';

import { NuevaReservaService } from './nueva-reserva.service';

describe('NuevaReservaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NuevaReservaService = TestBed.get(NuevaReservaService);
    expect(service).toBeTruthy();
  });
});
