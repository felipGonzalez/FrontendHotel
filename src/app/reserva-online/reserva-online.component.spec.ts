import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaOnlineComponent } from './reserva-online.component';

describe('ReservaOnlineComponent', () => {
  let component: ReservaOnlineComponent;
  let fixture: ComponentFixture<ReservaOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
