import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCallsComponent } from './coach-calls.component';

describe('CoachCallsComponent', () => {
  let component: CoachCallsComponent;
  let fixture: ComponentFixture<CoachCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
