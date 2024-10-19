import { TestBed } from '@angular/core/testing';

import { ReservationRequestsService } from './reservation-requests.service';

describe('ReservationRequestsService', () => {
  let service: ReservationRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
