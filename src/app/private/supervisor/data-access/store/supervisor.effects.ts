import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';
import { SupervisorVenueActions } from './venue/venue.actions';

export const supervisorSuccessEffect = createEffect(
  (actions$ = inject(Actions), messageService = inject(MessageService)) =>
    actions$.pipe(
      ofType(SupervisorVenueActions.venueRequestSuccess),
      tap(({ message }) =>
        messageService.add({
          severity: 'success',
          detail: message,
        })
      )
    ),
  { functional: true, dispatch: false }
);

export const supervisorFailureEffect = createEffect(
  (actions$ = inject(Actions), messageService = inject(MessageService)) =>
    actions$.pipe(
      ofType(SupervisorVenueActions.venueRequestFailure),
      tap(({ message }) =>
        messageService.add({
          severity: 'error',
          detail: message,
        })
      )
    ),
  { functional: true, dispatch: false }
);
