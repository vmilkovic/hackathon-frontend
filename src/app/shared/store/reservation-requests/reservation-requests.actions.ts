import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IReservationRequest } from '../../models/reservation/reservation.model';

export const ReservationRequestsActions = createActionGroup({
  source: 'Reservation Requests',
  events: {
    'Create Reservation Request For Current Venue': props<{
      data: Omit<IReservationRequest, 'venueId'>; // We omit venueId because it is already known by the store
    }>(),
    'Create Reservation Request For Current Venue Success': emptyProps(),
    'Create Reservation Request For Current Venue Failure': props<{
      error: string;
    }>(),
  },
});
