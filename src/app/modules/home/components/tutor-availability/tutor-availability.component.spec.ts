import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAvailabilityComponent } from './tutor-availability.component';

describe('TutorAvailabilityComponent', () => {
  let component: TutorAvailabilityComponent;
  let fixture: ComponentFixture<TutorAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
