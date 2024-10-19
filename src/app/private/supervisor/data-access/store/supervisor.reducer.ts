import { combineReducers, createFeature } from '@ngrx/store';
import {
  custodianReducer,
  custodianReducerKey,
} from './custodian/custodian.reducer';
import { venueReducer, venueReducerKey } from './venue/venue.reducer';

export const supervisorFeatureKey = 'supervisor';

const supervisorReducer = combineReducers({
  [custodianReducerKey]: custodianReducer,
  [venueReducerKey]: venueReducer,
});

export const supervisorFeature = createFeature({
  name: supervisorFeatureKey,
  reducer: supervisorReducer,
});
