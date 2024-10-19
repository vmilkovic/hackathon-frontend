import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustodianApiService } from '@supervisor/data-access/services/custodian/custodian-api.service';
import { mapCreateCustodianFormInputFieldsToCreateCustodianRequest } from '@supervisor/feature/custodian/util/create/custodian-create-mappers';
import { catchError, map, of, switchMap } from 'rxjs';
import { SupervisorCustodianCreateActions } from './custodian-create.actions';

export const createCustodianEffect = createEffect(
  (
    action$ = inject(Actions),
    custodianApiService = inject(CustodianApiService)
  ) =>
    action$.pipe(
      ofType(SupervisorCustodianCreateActions.createCustodianFormSubmitted),
      switchMap((payload) =>
        custodianApiService
          .create$(
            mapCreateCustodianFormInputFieldsToCreateCustodianRequest(payload)
          )
          .pipe(
            map(({ id }) =>
              SupervisorCustodianCreateActions.createCustodianSuccess({
                id,
                message: 'Create custodian success',
              })
            ),
            catchError(() =>
              of(
                SupervisorCustodianCreateActions.createCustodianFailure({
                  message: 'Create custodian failure',
                })
              )
            )
          )
      )
    ),
  { functional: true }
);
