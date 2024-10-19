import { Action } from '@ngrx/store';
import { initialState, venuesFeature } from './venues.store';

describe('Venues Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action: Action = { type: 'NOOP' };

      const result = venuesFeature.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
