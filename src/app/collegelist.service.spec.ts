import { TestBed } from '@angular/core/testing';

import { CollegelistService } from './collegelist.service';

describe('CollegelistService', () => {
  let service: CollegelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
