import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { createSelector } from '@ngrx/store';

export const selectTenantList = createSelector(
  adminFeature.selectTenant,
  ({ list }) => list
);

export const selectTenants = createSelector(
  selectTenantList,
  ({ tenants }) => tenants
);

export const selectIsTenantListLoading = createSelector(
  selectTenantList,
  ({ isLoading }) => isLoading
);
