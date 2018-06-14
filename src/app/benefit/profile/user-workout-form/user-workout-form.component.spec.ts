import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkoutFormComponent } from './user-workout-form.component';

describe('UserWorkoutFormComponent', () => {
  let component: UserWorkoutFormComponent;
  let fixture: ComponentFixture<UserWorkoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWorkoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
