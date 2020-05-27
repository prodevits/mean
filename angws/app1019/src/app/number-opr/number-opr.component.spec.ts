import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOprComponent } from './number-opr.component';

describe('NumberOprComponent', () => {
  let component: NumberOprComponent;
  let fixture: ComponentFixture<NumberOprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
