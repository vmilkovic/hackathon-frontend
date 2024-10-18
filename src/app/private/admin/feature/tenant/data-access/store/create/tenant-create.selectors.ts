import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { createSelector } from '@ngrx/store';

export const selectTenantCreateForm = createSelector(
  adminFeature.selectCreate,
  ({ form }) => form
);

export const selectTenantCreateFormInputFields = createSelector(
  selectTenantCreateForm,
  ({ inputFields }) => inputFields
);
