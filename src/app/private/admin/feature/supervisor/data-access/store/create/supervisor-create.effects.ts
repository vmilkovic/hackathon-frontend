import { SupervisorApiService } from '@admin/data-access/services/supervisor/supervisor-api.service';
import { AdminSupervisorCreateActions } from '@admin/feature/supervisor/data-access/store/create/supervisor-create.actions';
import { mapCreateSupervisorFormInputFieldsToCreateSupervisorRequest } from '@admin/feature/supervisor/util/create/supervisor-create-mappers';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

export const createSupervisorEffect = createEffect(
  (
    action$ = inject(Actions),
    supervisorApiService = inject(SupervisorApiService)
  ) =>
    action$.pipe(
      ofType(AdminSupervisorCreateActions.createSupervisorFormSubmitted),
      switchMap((payload) =>
        supervisorApiService
          .create$(
            mapCreateSupervisorFormInputFieldsToCreateSupervisorRequest(payload)
          )
          .pipe(
            map(({ id }) =>
              AdminSupervisorCreateActions.createSupervisorSuccess({
                id,
                message: 'Create supervisor success',
              })
            ),
            catchError(() =>
              of(
                AdminSupervisorCreateActions.createSupervisorFailure({
                  message: 'Create supervisor failure',
                })
              )
            )
          )
      )
    ),
  { functional: true }
);
