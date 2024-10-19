import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { createSelector } from '@ngrx/store';

export const selectSupervisorCreate = createSelector(
  adminFeature.selectSupervisor,
  ({ create }) => create
);

export const selectSupervisorCreateForm = createSelector(
  selectSupervisorCreate,
  ({ form }) => form
);

export const selectSupervisorCreateFormInputFields = createSelector(
  selectSupervisorCreateForm,
  ({ inputFields }) => inputFields
);
