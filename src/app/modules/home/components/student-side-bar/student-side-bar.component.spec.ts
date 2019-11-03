import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentSideBarComponent } from "./student-side-bar.component";

describe("StudentSideBarComponent", () => {
	let component: StudentSideBarComponent;
	let fixture: ComponentFixture<StudentSideBarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [StudentSideBarComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StudentSideBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
