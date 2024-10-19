import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IVenue } from '../../models/venue/venue.model';

export const VenuesActions = createActionGroup({
  source: 'Venues',
  events: {
    'Load All Venues For Current Tenant': emptyProps(),
    'Load All Venues For Current Tenant Success': props<{ data: IVenue[] }>(),
    'Load All Venues For Current Tenant Failure': props<{ error: string }>(),
    'Load Current Venue By Id': props<{ id: string }>(),
    'Load Current Venue By Id Success': props<{ data: IVenue }>(),
    'Load Current Venue By Id Failure': props<{ error: string }>(),
  },
});
