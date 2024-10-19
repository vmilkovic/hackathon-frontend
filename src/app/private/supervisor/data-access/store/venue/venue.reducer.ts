import { Action, ActionReducer, combineReducers } from '@ngrx/store';
import { VenueState } from '@supervisor/data-access/models/venue/venue-store.model';
import {
  venueCreateReducer,
  venueCreateReducerKey,
} from '@supervisor/feature/venue/data-access/store/create/venue-create.reducer';

export const venueReducerKey = 'venue';

export const venueReducer: ActionReducer<
  VenueState,
  Action<string>
> = combineReducers({
  [venueCreateReducerKey]: venueCreateReducer,
});
