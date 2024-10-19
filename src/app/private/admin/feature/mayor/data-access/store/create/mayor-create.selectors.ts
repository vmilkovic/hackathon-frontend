import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { createSelector } from '@ngrx/store';

export const selectMayorCreate = createSelector(
  adminFeature.selectMayor,
  ({ create }) => create
);

export const selectMayorCreateForm = createSelector(
  selectMayorCreate,
  ({ form }) => form
);

export const selectMayorCreateFormInputFields = createSelector(
  selectMayorCreateForm,
  ({ inputFields }) => inputFields
);
