import { TestBed } from '@angular/core/testing';

import { NgTrichotomyService } from './ng-trichotomy.service';

describe('NgTrichotomyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTrichotomyService = TestBed.get(NgTrichotomyService);
    expect(service).toBeTruthy();
  });
});
