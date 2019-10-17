import { TestBed } from '@angular/core/testing';

import { TutoringSessionService } from './tutoring-session.service';

describe('TutoringSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutoringSessionService = TestBed.get(TutoringSessionService);
    expect(service).toBeTruthy();
  });
});
