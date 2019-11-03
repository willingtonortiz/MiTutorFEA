import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TutorSideBarComponent } from "./tutor-side-bar.component";

describe("TutorSideBarComponent", () => {
	let component: TutorSideBarComponent;
	let fixture: ComponentFixture<TutorSideBarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TutorSideBarComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TutorSideBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
