import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookComponent } from './all-book.component';

describe('AllBookComponent', () => {
  let component: AllBookComponent;
  let fixture: ComponentFixture<AllBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBookComponent]
    });
    fixture = TestBed.createComponent(AllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
