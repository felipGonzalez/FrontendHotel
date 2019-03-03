import { TestBed } from '@angular/core/testing';

import { ProvedoresService } from './provedores.service';

describe('ProvedoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvedoresService = TestBed.get(ProvedoresService);
    expect(service).toBeTruthy();
  });
});
