import { TenantState } from '@admin/data-access/models/tenant/tenant-store.model';
import {
  tenantCreateReducer,
  tenantCreateReducerKey,
} from '@admin/feature/tenant/data-access/store/create/tenant-create.reducer';
import {
  tenantEditReducer,
  tenantEditReducerKey,
} from '@admin/feature/tenant/data-access/store/edit/tenant-edit.reducer';
import { Action, ActionReducer, combineReducers } from '@ngrx/store';

export const tenantReducerKey = 'tenant';

export const tenantReducer: ActionReducer<
  TenantState,
  Action<string>
> = combineReducers({
  [tenantCreateReducerKey]: tenantCreateReducer,
  [tenantEditReducerKey]: tenantEditReducer,
});
