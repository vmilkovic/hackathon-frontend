import { AdminTenantActions } from '@admin/data-access/store/tenant/tenant.actions';
import { AdminTenantCreateActions } from '@admin/feature/tenant/data-access/store/create/tenant-create.actions';
import { AdminTenantEditActions } from '@admin/feature/tenant/data-access/store/edit/tenant-edit.actions';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of, tap } from 'rxjs';

export const adminTenantSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(
        AdminTenantCreateActions.createTenantSuccess,
        AdminTenantEditActions.updateTenantSuccess
      ),
      concatMap(({ message }) =>
        of(AdminTenantActions.tenantRequestSuccess({ message }))
      ),
      tap(() => router.navigate(['admin/tenant']))
    ),
  { functional: true }
);

export const adminTenantFailureEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(
        AdminTenantCreateActions.createTenantFailure,
        AdminTenantEditActions.updateTenantFailure
      ),
      concatMap(({ message }) =>
        of(AdminTenantActions.tenantRequestFailure({ message }))
      )
    ),
  { functional: true }
);
