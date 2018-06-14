import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimelineTableComponent } from './user-timeline-table.component';

describe('UserTimelineTableComponent', () => {
  let component: UserTimelineTableComponent;
  let fixture: ComponentFixture<UserTimelineTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimelineTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimelineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
