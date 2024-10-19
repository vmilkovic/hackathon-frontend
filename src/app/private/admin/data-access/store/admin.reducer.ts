import { combineReducers, createFeature } from '@ngrx/store';
import {
  supervisorReducer,
  supervisorReducerKey,
} from './supervisor/supervisor.reducer';
import { tenantReducer, tenantReducerKey } from './tenant/tenant.reducer';

export const adminFeatureKey = 'admin';

const adminReducer = combineReducers({
  [tenantReducerKey]: tenantReducer,
  [supervisorReducerKey]: supervisorReducer,
});

export const adminFeature = createFeature({
  name: adminFeatureKey,
  reducer: adminReducer,
});
