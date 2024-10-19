import { createActionGroup, props } from '@ngrx/store';
import {
  VenueRequestFailure,
  VenueRequestSuccess,
} from '@supervisor/data-access/models/venue/venue-api.model';

export const SupervisorVenueActions = createActionGroup({
  source: 'Supervisor Venue',
  events: {
    'Venue request success': props<VenueRequestSuccess>(),
    'Venue request failure': props<VenueRequestFailure>(),
  },
});
