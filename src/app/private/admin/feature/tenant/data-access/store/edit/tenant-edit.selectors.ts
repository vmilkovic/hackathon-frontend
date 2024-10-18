import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { createSelector } from '@ngrx/store';

export const selectTenantEdit = createSelector(
  adminFeature.selectTenant,
  ({ edit }) => edit
);

export const selectTenantEditForm = createSelector(
  selectTenantEdit,
  ({ form }) => form
);

export const selectTenantEditFormInputFields = createSelector(
  selectTenantEditForm,
  ({ inputFields }) => inputFields
);

export const selectIsTenantEditLoading = createSelector(
  selectTenantEdit,
  ({ isLoading }) => isLoading
);
