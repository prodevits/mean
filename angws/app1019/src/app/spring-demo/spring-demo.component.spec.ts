import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringDemoComponent } from './spring-demo.component';

describe('SpringDemoComponent', () => {
  let component: SpringDemoComponent;
  let fixture: ComponentFixture<SpringDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
