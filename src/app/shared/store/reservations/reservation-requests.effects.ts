import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IReservationRequest } from '../../models/reservation/reservation.model';
import { ReservationRequestsService } from '../../services/reservation-requests/reservation-requests.service';
import { venuesFeature } from '../venues/venues.store';
import { ReservationRequestsActions } from './reservation-requests.actions';

@Injectable()
export class ReservationRequestsEffects {
  private actions$ = inject(Actions);
  private reservationsService = inject(ReservationRequestsService);
  private store = inject(Store);
  private messageService = inject(MessageService);

  public createReservationForCurrentVenue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ReservationRequestsActions.createReservationRequestForCurrentVenue
      ),
      concatLatestFrom(() =>
        this.store.select(venuesFeature.selectCurrentVenue)
      ),
      exhaustMap(([action, currentVenue]) => {
        if (!currentVenue) {
          return of(
            ReservationRequestsActions.createReservationRequestForCurrentVenueFailure(
              {
                error: 'No current venue selected',
              }
            )
          );
        }

        const reservation: IReservationRequest = {
          ...action.data,
          venueId: currentVenue.id,
        };

        return this.reservationsService
          .createReservationRequest(reservation)
          .pipe(
            map(() => {
              return ReservationRequestsActions.createReservationRequestForCurrentVenueSuccess();
            }),
            catchError((error) =>
              of(
                ReservationRequestsActions.createReservationRequestForCurrentVenueFailure(
                  {
                    error,
                  }
                )
              )
            )
          );
      })
    );
  });
}
