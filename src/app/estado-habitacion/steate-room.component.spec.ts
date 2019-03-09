import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteateRoomComponent } from './steate-room.component';

describe('SteateRoomComponent', () => {
  let component: SteateRoomComponent;
  let fixture: ComponentFixture<SteateRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteateRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
