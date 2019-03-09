import { TestBed } from '@angular/core/testing';

import { CreateTipoReservaService } from './create-tipo-reserva.service';

describe('CreateTipoReservaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTipoReservaService = TestBed.get(CreateTipoReservaService);
    expect(service).toBeTruthy();
  });
});
