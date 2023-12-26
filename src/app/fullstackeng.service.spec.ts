import { TestBed } from '@angular/core/testing';

import { FullstackengService } from './fullstackeng.service';

describe('FullstackengService', () => {
  let service: FullstackengService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullstackengService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
