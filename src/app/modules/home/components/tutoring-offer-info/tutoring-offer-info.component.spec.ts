import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TutoringOfferInfoComponent } from "./tutoring-offer-info.component";

describe("TutoringOfferInfoComponent", () => {
	let component: TutoringOfferInfoComponent;
	let fixture: ComponentFixture<TutoringOfferInfoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TutoringOfferInfoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TutoringOfferInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
