import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorInfoGroupComponent } from './tutor-info-group.component';

describe('TutorInfoGroupComponent', () => {
  let component: TutorInfoGroupComponent;
  let fixture: ComponentFixture<TutorInfoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorInfoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
