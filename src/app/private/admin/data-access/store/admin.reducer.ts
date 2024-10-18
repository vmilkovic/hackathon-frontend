import { combineReducers, createFeature } from '@ngrx/store';
import { tenantReducer, tenantReducerKey } from './tenant/tenant.reducer';

export const adminFeatureKey = 'admin';

const adminReducer = combineReducers({
  [tenantReducerKey]: tenantReducer,
});

export const adminFeature = createFeature({
  name: adminFeatureKey,
  reducer: adminReducer,
});
