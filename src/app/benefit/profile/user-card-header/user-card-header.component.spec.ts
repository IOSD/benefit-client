import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardHeaderComponent } from './user-card-header.component';

describe('UserCardHeaderComponent', () => {
  let component: UserCardHeaderComponent;
  let fixture: ComponentFixture<UserCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
