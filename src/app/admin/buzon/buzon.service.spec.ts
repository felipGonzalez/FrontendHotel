import { TestBed } from '@angular/core/testing';

import { BuzonService } from './buzon.service';

describe('BuzonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuzonService = TestBed.get(BuzonService);
    expect(service).toBeTruthy();
  });
});
