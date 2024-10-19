import { AdminSupervisorActions } from '@admin/data-access/store/supervisor/supervisor.actions';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of, tap } from 'rxjs';

export const adminTenantSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(AdminSupervisorActions.supervisorRequestSuccess),
      concatMap(({ message }) =>
        of(AdminSupervisorActions.supervisorRequestSuccess({ message }))
      ),
      tap(() => router.navigate(['admin/supervisor']))
    ),
  { functional: true }
);

export const adminTenantFailureEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(AdminSupervisorActions.supervisorRequestFailure),
      concatMap(({ message }) =>
        of(AdminSupervisorActions.supervisorRequestSuccess({ message }))
      )
    ),
  { functional: true }
);
