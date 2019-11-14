import { TestBed } from '@angular/core/testing';

import { PublishTutoringService } from './publish-tutoring.service';

describe('PublishTutoringService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PublishTutoringService = TestBed.get(PublishTutoringService);
		expect(service).toBeTruthy();
	});
});
