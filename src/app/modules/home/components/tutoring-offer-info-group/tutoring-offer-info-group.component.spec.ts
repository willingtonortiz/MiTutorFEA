import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringOfferInfoGroupComponent } from './tutoring-offer-info-group.component';

describe('TutoringOfferInfoGroupComponent', () => {
  let component: TutoringOfferInfoGroupComponent;
  let fixture: ComponentFixture<TutoringOfferInfoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoringOfferInfoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringOfferInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
