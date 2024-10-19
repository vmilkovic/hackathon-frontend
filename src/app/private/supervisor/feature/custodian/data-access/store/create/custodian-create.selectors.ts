import { createSelector } from '@ngrx/store';
import { supervisorFeature } from '@supervisor/data-access/store/supervisor.reducer';

export const selectCustodianCreate = createSelector(
  supervisorFeature.selectCustodian,
  ({ create }) => create
);
