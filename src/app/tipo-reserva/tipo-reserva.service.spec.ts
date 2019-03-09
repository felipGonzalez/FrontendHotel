import { TestBed } from '@angular/core/testing';

import { TipoReservaService } from './tipo-reserva.service';

describe('TipoReservaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoReservaService = TestBed.get(TipoReservaService);
    expect(service).toBeTruthy();
  });
});
