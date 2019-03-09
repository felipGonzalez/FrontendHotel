import { TestBed } from '@angular/core/testing';

import { StateRoomService } from './state-room.service';

describe('StateRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateRoomService = TestBed.get(StateRoomService);
    expect(service).toBeTruthy();
  });
});
