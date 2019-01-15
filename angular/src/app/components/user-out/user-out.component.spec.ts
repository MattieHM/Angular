import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutComponent } from './user-out.component';

describe('UserOutComponent', () => {
  let component: UserOutComponent;
  let fixture: ComponentFixture<UserOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
