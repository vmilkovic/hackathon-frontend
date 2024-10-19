import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IMyReservation } from '../../models/my-reservation/my-reservation.model';

export const MyReservationsActions = createActionGroup({
  source: 'My Reservations',
  events: {
    'Load All My Reservations': emptyProps(),
    'Load All My Reservations Success': props<{
      data: IMyReservation[];
    }>(),
    'Load All My Reservations Failure': props<{ error: string }>(),
  },
});
