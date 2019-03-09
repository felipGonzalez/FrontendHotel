import { TestBed } from '@angular/core/testing';

import { CreateStateRoomService } from './create-state-room.service';

describe('CreateStateRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateStateRoomService = TestBed.get(CreateStateRoomService);
    expect(service).toBeTruthy();
  });
});
