import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueReservationsComponent } from './venue-reservations.component';

describe('VenueReservationsComponent', () => {
  let component: VenueReservationsComponent;
  let fixture: ComponentFixture<VenueReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
