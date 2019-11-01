import { TestBed } from "@angular/core/testing";

import { SearchTutoringOffersAnsTutorsService } from "./search-tutoring-offers-ans-tutors.service";

describe("SearchTutoringOffersAnsTutorsService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it("should be created", () => {
		const service: SearchTutoringOffersAnsTutorsService = TestBed.get(
			SearchTutoringOffersAnsTutorsService
		);
		expect(service).toBeTruthy();
	});
});
