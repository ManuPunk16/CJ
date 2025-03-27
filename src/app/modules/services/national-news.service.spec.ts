import { TestBed } from '@angular/core/testing';

import { NationalNewsService } from './national-news.service';

describe('NationalNewsService', () => {
  let service: NationalNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
