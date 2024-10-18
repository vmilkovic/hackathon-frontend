import { TenantListState } from '@admin/feature/tenant/data-access/models/list/tenant-list-store.model';
import { AdminTenantListActions } from '@admin/feature/tenant/data-access/store/list/tenant-list.actions';
import { createReducer, on } from '@ngrx/store';

export const tenantListReducerKey = 'list';

const initialTenantListState: TenantListState = {
  tenants: [],
  isLoading: false,
};

export const tenantListReducer = createReducer(
  initialTenantListState,
  on(AdminTenantListActions.loadAllTenants, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AdminTenantListActions.loadAllTenantsSuccess, (state, { data }) => ({
    ...state,
    tenants: data,
    isLoading: false,
  })),
  on(AdminTenantListActions.loadAllTenantsFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);
