import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddimageComponent } from './useraddimage.component';

describe('UseraddimageComponent', () => {
  let component: UseraddimageComponent;
  let fixture: ComponentFixture<UseraddimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
