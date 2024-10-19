import { Action } from '@ngrx/store';
import { initialState, tenantsFeature } from './tenants.store';

describe('Tenants Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action: Action = { type: 'NOOP' };

      const result = tenantsFeature.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
