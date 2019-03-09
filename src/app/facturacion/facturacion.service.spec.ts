import { TestBed } from '@angular/core/testing';

import { FacturacionService } from './facturacion.service';

describe('FacturacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturacionService = TestBed.get(FacturacionService);
    expect(service).toBeTruthy();
  });
});
