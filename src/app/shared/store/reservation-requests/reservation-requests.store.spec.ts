import { Action } from '@ngrx/store';
import { initialState, reservationsFeature } from './reservations.store';

describe('Reservations Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action: Action = { type: 'NOOP' };

      const result = reservationsFeature.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
