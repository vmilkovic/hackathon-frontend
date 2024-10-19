import { combineReducers, createFeature } from '@ngrx/store';
import { mayorReducer, mayorReducerKey } from './mayor/mayor.reducer';
import {
  supervisorReducer,
  supervisorReducerKey,
} from './supervisor/supervisor.reducer';
import { tenantReducer, tenantReducerKey } from './tenant/tenant.reducer';

export const adminFeatureKey = 'admin';

const adminReducer = combineReducers({
  [tenantReducerKey]: tenantReducer,
  [supervisorReducerKey]: supervisorReducer,
  [mayorReducerKey]: mayorReducer,
});

export const adminFeature = createFeature({
  name: adminFeatureKey,
  reducer: adminReducer,
});
