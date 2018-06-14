import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpiryCardComponent } from './user-expiry-card.component';

describe('UserExpiryCardComponent', () => {
  let component: UserExpiryCardComponent;
  let fixture: ComponentFixture<UserExpiryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExpiryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExpiryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
