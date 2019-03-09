import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSteateRoomComponent } from './create-steate-room.component';

describe('CreateSteateRoomComponent', () => {
  let component: CreateSteateRoomComponent;
  let fixture: ComponentFixture<CreateSteateRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSteateRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSteateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
