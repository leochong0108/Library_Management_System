import { TestBed } from '@angular/core/testing';

import { AllBookService } from './all-book.service';

describe('AllBookService', () => {
  let service: AllBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
