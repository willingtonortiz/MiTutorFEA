import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishSessionComponent } from './publish-session.component';

describe('PublishSessionComponent', () => {
	let component: PublishSessionComponent;
	let fixture: ComponentFixture<PublishSessionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ PublishSessionComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PublishSessionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
