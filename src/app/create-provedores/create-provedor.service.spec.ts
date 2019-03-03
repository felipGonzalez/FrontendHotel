import { TestBed } from '@angular/core/testing';

import { CreateProvedorService } from './create-provedor.service';

describe('CreateProvedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateProvedorService = TestBed.get(CreateProvedorService);
    expect(service).toBeTruthy();
  });
});
