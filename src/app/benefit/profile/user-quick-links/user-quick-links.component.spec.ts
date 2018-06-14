import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuickLinksComponent } from './user-quick-links.component';

describe('UserQuickLinksComponent', () => {
  let component: UserQuickLinksComponent;
  let fixture: ComponentFixture<UserQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
