import { MayorApiService } from '@admin/data-access/services/mayor/mayor-api.service';
import { mapMayorFormInputValuesToActionFormInputs } from '@admin/feature/mayor/util/mayor-form-input-mappers';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AdminMayorCreateActions } from './mayor-create.actions';

export const createMayorEffect = createEffect(
  (action$ = inject(Actions), mayorApiService = inject(MayorApiService)) =>
    action$.pipe(
      ofType(AdminMayorCreateActions.createMayorFormSubmitted),
      switchMap((payload) =>
        mayorApiService
          .create$(mapMayorFormInputValuesToActionFormInputs(payload))
          .pipe(
            map(({ id }) =>
              AdminMayorCreateActions.createMayorSuccess({
                id,
                message: 'Create mayor success',
              })
            ),
            catchError(() =>
              of(
                AdminMayorCreateActions.createMayorFailure({
                  message: 'Create mayor failure',
                })
              )
            )
          )
      )
    ),
  { functional: true }
);
