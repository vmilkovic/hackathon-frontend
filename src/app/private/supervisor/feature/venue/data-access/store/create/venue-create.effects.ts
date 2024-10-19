import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VenueApiService } from '@supervisor/data-access/services/venue/venue-api.service';
import { mapCreateVenueFormInputFieldsToCreateVenueRequest } from '@supervisor/feature/venue/util/create/venue-create-mappers';
import { catchError, map, of, switchMap } from 'rxjs';
import { SupervisorVenueCreateActions } from './venue-create.actions';

export const createVenueEffect = createEffect(
  (action$ = inject(Actions), venueApiService = inject(VenueApiService)) =>
    action$.pipe(
      ofType(SupervisorVenueCreateActions.createVenueFormSubmitted),
      switchMap((payload) =>
        venueApiService
          .create$(mapCreateVenueFormInputFieldsToCreateVenueRequest(payload))
          .pipe(
            map(({ id }) =>
              SupervisorVenueCreateActions.createVenueSuccess({
                id,
                message: 'Create venue success',
              })
            ),
            catchError(() =>
              of(
                SupervisorVenueCreateActions.createVenueFailure({
                  message: 'Create venue failure',
                })
              )
            )
          )
      )
    ),
  { functional: true }
);
