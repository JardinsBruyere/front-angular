import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybuttonComponent } from './displaybutton.component';

describe('DisplaybuttonComponent', () => {
  let component: DisplaybuttonComponent;
  let fixture: ComponentFixture<DisplaybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaybuttonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplaybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
