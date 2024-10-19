import { createActionGroup, props } from '@ngrx/store';
import {
  CreateVenueFailure,
  CreateVenueSuccess,
} from '../../models/create/venue-create-api.model';
import {
  CreateVenueForm,
  CreateVenueFormInputFields,
} from '../../models/create/venue-create-store.model';

export const SupervisorVenueCreateActions = createActionGroup({
  source: 'Supervisor Venue Create',
  events: {
    'Create venue form changed': props<CreateVenueForm>(),
    'Create venue form submitted': props<CreateVenueFormInputFields>(),
    'Create venue success': props<CreateVenueSuccess>(),
    'Create venue failure': props<CreateVenueFailure>(),
  },
});
