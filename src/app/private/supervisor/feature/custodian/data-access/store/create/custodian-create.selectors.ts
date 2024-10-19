import { createSelector } from '@ngrx/store';
import { supervisorFeature } from '@supervisor/data-access/store/supervisor.reducer';

export const selectCustodianCreate = createSelector(
  supervisorFeature.selectCustodian,
  ({ create }) => create
);

export const selectCustodianCreateForm = createSelector(
  selectCustodianCreate,
  ({ form }) => form
);

export const selectCustodianCreateFormInputFields = createSelector(
  selectCustodianCreateForm,
  ({ inputFields }) => inputFields
);
