import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { createSelector } from '@ngrx/store';

export const selectSupervisorEdit = createSelector(
  adminFeature.selectSupervisor,
  ({ edit }) => edit
);

export const selectSupervisorEditForm = createSelector(
  selectSupervisorEdit,
  ({ form }) => form
);

export const selectSupervisorEditFormInputFields = createSelector(
  selectSupervisorEditForm,
  ({ inputFields }) => inputFields
);

export const selectIsSupervisorEditLoading = createSelector(
  selectSupervisorEdit,
  ({ isLoading }) => isLoading
);
