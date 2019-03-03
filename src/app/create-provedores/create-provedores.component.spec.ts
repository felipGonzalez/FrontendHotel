import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProvedoresComponent } from './create-provedores.component';

describe('CreateProvedoresComponent', () => {
  let component: CreateProvedoresComponent;
  let fixture: ComponentFixture<CreateProvedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProvedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProvedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
