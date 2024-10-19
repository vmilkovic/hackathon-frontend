import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IReservation } from '../../models/reservation/reservation.model';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { venuesFeature } from '../venues/venues.store';
import { ReservationsActions } from './reservations.actions';

@Injectable()
export class ReservationsEffects {
  private actions$ = inject(Actions);
  private reservationsService = inject(ReservationsService);
  private store = inject(Store);
  private messageService = inject(MessageService);

  public createReservationForCurrentVenue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReservationsActions.createReservationForCurrentVenue),
      concatLatestFrom(() =>
        this.store.select(venuesFeature.selectCurrentVenue)
      ),
      exhaustMap(([action, currentVenue]) => {
        if (!currentVenue) {
          return of(
            ReservationsActions.createReservationForCurrentVenueFailure({
              error: 'No current venue selected',
            })
          );
        }

        const reservation: IReservation = {
          ...action.data,
          venueId: currentVenue.id,
        };

        return this.reservationsService.createReservation(reservation).pipe(
          map(() => {
            return ReservationsActions.createReservationForCurrentVenueSuccess();
          }),
          catchError((error) =>
            of(
              ReservationsActions.createReservationForCurrentVenueFailure({
                error,
              })
            )
          )
        );
      })
    );
  });
}
