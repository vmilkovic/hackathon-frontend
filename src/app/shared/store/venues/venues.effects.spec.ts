import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { VenuesEffects } from './venues.effects';

describe('VenuesEffects', () => {
  let actions$: Observable<never>;
  let effects: VenuesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VenuesEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(VenuesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
