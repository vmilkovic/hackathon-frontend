import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { createSelector } from '@ngrx/store';

export const selectTenantCreate = createSelector(
  adminFeature.selectTenant,
  ({ create }) => create
);

export const selectTenantCreateForm = createSelector(
  selectTenantCreate,
  ({ form }) => form
);

export const selectTenantCreateFormInputFields = createSelector(
  selectTenantCreateForm,
  ({ inputFields }) => inputFields
);
