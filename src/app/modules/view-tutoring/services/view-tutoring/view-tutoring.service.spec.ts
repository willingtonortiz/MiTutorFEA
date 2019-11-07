import { TestBed } from '@angular/core/testing';

import { ViewTutoringService } from './view-tutoring.service';

describe('ViewTutoringService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ViewTutoringService = TestBed.get(ViewTutoringService);
		expect(service).toBeTruthy();
	});
});
