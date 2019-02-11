import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalirComponent } from './salir.component';

describe('SalirComponent', () => {
  let component: SalirComponent;
  let fixture: ComponentFixture<SalirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
