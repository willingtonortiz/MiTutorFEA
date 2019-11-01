import { TestBed } from '@angular/core/testing';

import { MembershipServiceService } from './membership-service.service';

describe('MembershipServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembershipServiceService = TestBed.get(MembershipServiceService);
    expect(service).toBeTruthy();
  });
});
