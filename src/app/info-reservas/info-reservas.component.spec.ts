import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReservasComponent } from './info-reservas.component';

describe('InfoReservasComponent', () => {
  let component: InfoReservasComponent;
  let fixture: ComponentFixture<InfoReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
