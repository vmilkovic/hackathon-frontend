import { AdminSupervisorActions } from '@admin/data-access/store/supervisor/supervisor.actions';
import { AdminTenantActions } from '@admin/data-access/store/tenant/tenant.actions';
import { AdminTenantCreateActions } from '@admin/feature/tenant/data-access/store/create/tenant-create.actions';
import { AdminTenantListActions } from '@admin/feature/tenant/data-access/store/list/tenant-list.actions';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of, tap } from 'rxjs';

export const adminTenantSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(
        AdminTenantListActions.deleteTenantSuccess,
        AdminTenantCreateActions.createTenantSuccess,
        AdminSupervisorActions.supervisorRequestSuccess
      ),
      concatMap(({ message }) =>
        of(AdminTenantActions.tenantRequestSuccess({ message }))
      ),
      tap(() => router.navigate(['admin/supervisor']))
    ),
  { functional: true }
);

export const adminTenantFailureEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(
        AdminTenantListActions.deleteTenantFailure,
        AdminTenantCreateActions.createTenantFailure,
        AdminSupervisorActions.supervisorRequestFailure
      ),
      concatMap(({ message }) =>
        of(AdminTenantActions.tenantRequestFailure({ message }))
      )
    ),
  { functional: true }
);
