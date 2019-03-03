import { TestBed } from '@angular/core/testing';

import { CreateProductService } from './create-product.service';

describe('CreateProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateProductService = TestBed.get(CreateProductService);
    expect(service).toBeTruthy();
  });
});
