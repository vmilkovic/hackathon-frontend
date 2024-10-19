import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SupervisorCustodianCreateActions } from '@supervisor/feature/custodian/data-access/store/create/custodian-create.actions';
import { concatMap, of, tap } from 'rxjs';
import { SupervisorCustodianActions } from './custodian.actions';

export const supervisorCustodianSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(SupervisorCustodianCreateActions.createCustodianSuccess),
      concatMap(({ message }) =>
        of(SupervisorCustodianActions.custodianRequestSuccess({ message }))
      ),
      tap(() => router.navigate(['supervisor/custodian']))
    ),
  { functional: true }
);

export const supervisorCustodianFailureEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(SupervisorCustodianCreateActions.createCustodianFailure),
      concatMap(({ message }) =>
        of(SupervisorCustodianActions.custodianRequestFailure({ message }))
      )
    ),
  { functional: true }
);
