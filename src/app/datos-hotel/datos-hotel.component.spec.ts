import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosHotelComponent } from './datos-hotel.component';

describe('DatosHotelComponent', () => {
  let component: DatosHotelComponent;
  let fixture: ComponentFixture<DatosHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
