import { TestBed } from '@angular/core/testing';

import { GuestListService } from './guest-list.service';

describe('GuestListService', () => {
  let service: GuestListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
