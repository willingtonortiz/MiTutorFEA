import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileModalContainerComponent } from "./profile-modal-container.component";

describe("ProfileModalContainerComponent", () => {
	let component: ProfileModalContainerComponent;
	let fixture: ComponentFixture<ProfileModalContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProfileModalContainerComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProfileModalContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
