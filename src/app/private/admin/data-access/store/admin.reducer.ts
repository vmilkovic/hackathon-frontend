import {
  tenantCreateReducer,
  tenantCreateReducerKey,
} from '@admin/feature/tenant/data-access/store/create/tenant-create.reducer';
import { combineReducers, createFeature } from '@ngrx/store';

export const adminFeatureKey = 'admin';

const adminReducer = combineReducers({
  [tenantCreateReducerKey]: tenantCreateReducer,
});

export const adminFeature = createFeature({
  name: adminFeatureKey,
  reducer: adminReducer,
});
