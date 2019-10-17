import { TestBed } from '@angular/core/testing';

import { SuscriptionService } from './suscription.service';

describe('SuscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuscriptionService = TestBed.get(SuscriptionService);
    expect(service).toBeTruthy();
  });
});
