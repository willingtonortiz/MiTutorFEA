import { TestBed } from '@angular/core/testing';

import { TutoringOfferService } from './tutoring-offer.service';

describe('TutoringOfferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutoringOfferService = TestBed.get(TutoringOfferService);
    expect(service).toBeTruthy();
  });
});
