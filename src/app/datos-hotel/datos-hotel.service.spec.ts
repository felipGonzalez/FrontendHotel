import { TestBed } from '@angular/core/testing';

import { DatosHotelService } from './datos-hotel.service';

describe('DatosHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosHotelService = TestBed.get(DatosHotelService);
    expect(service).toBeTruthy();
  });
});
