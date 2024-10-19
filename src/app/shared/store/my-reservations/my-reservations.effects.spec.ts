import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { MyReservationsEffects } from './my-reservations.effects';

describe('MyReservationsEffects', () => {
  let actions$: Observable<never>;
  let effects: MyReservationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyReservationsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(MyReservationsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
