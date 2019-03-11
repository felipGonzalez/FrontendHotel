import { TestBed } from '@angular/core/testing';

import { InfoReservaService } from './info-reserva.service';

describe('InfoReservaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoReservaService = TestBed.get(InfoReservaService);
    expect(service).toBeTruthy();
  });
});
