import { createSelector } from '@ngrx/store';
import { supervisorFeature } from '@supervisor/data-access/store/supervisor.reducer';

export const selectVenueCreate = createSelector(
  supervisorFeature.selectVenue,
  ({ create }) => create
);

export const selectVenueCreateForm = createSelector(
  selectVenueCreate,
  ({ form }) => form
);

export const selectVenueCreateFormInputFields = createSelector(
  selectVenueCreateForm,
  ({ inputFields }) => inputFields
);
