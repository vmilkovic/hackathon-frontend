import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TenantsEffects } from './tenants.effects';

describe('TenantsEffects', () => {
  let actions$: Observable<never>;
  let effects: TenantsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenantsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(TenantsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
