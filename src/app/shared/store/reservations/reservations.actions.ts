import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IReservation } from '../../models/reservation/reservation.model';

export const ReservationsActions = createActionGroup({
  source: 'Reservations',
  events: {
    'Create Reservation For Current Venue': props<{
      data: Omit<IReservation, 'venueId'>; // We omit venueId because it is already known by the store
    }>(),
    'Create Reservation For Current Venue Success': emptyProps(),
    'Create Reservation For Current Venue Failure': props<{ error: string }>(),
  },
});
