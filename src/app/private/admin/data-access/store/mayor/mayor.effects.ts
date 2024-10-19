import { AdminMayorCreateActions } from '@admin/feature/mayor/data-access/store/create/mayor-create.actions';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of, tap } from 'rxjs';
import { AdminMayorActions } from './mayor.actions';

export const adminMayorSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(AdminMayorCreateActions.createMayorSuccess),
      concatMap(({ message }) =>
        of(AdminMayorActions.mayorRequestSuccess({ message }))
      ),
      tap(() => router.navigate(['admin/mayor']))
    ),
  { functional: true }
);

export const adminMayorFailureEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(AdminMayorCreateActions.createMayorFailure),
      concatMap(({ message }) =>
        of(AdminMayorActions.mayorRequestFailure({ message }))
      )
    ),
  { functional: true }
);
