import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SupervisorVenueCreateActions } from '@supervisor/feature/venue/data-access/store/create/venue-create.actions';
import { concatMap, of, tap } from 'rxjs';
import { SupervisorVenueActions } from './venue.actions';

export const adminVenueSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(SupervisorVenueCreateActions.createVenueSuccess),
      concatMap(({ message }) =>
        of(SupervisorVenueActions.venueRequestSuccess({ message }))
      ),
      tap(() => router.navigate(['admin/venue']))
    ),
  { functional: true }
);

export const adminVenueFailureEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(SupervisorVenueCreateActions.createVenueFailure),
      concatMap(({ message }) =>
        of(SupervisorVenueActions.venueRequestFailure({ message }))
      )
    ),
  { functional: true }
);
