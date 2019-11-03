import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TutorTutoringsComponent } from "./tutor-tutorings.component";

describe("TutorTutoringsComponent", () => {
	let component: TutorTutoringsComponent;
	let fixture: ComponentFixture<TutorTutoringsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TutorTutoringsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TutorTutoringsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
