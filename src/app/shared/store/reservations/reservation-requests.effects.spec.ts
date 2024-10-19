import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ReservationRequestsEffects } from './reservation-requests.effects';

describe('ReservationRequestsEffects', () => {
  let actions$: Observable<never>;
  let effects: ReservationRequestsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReservationRequestsEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(ReservationRequestsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
