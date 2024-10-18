import { TenantApiService } from '@admin/data-access/services/tenant/tenant-api.service';
import { AdminTenantListActions } from '@admin/feature/tenant/data-access/store/list/tenant-list.actions';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

export const loadAllTenantsEffect = createEffect(
  (action$ = inject(Actions), tenantApiService = inject(TenantApiService)) =>
    action$.pipe(
      ofType(
        AdminTenantListActions.loadAllTenants,
        AdminTenantListActions.deleteTenantSuccess
      ),
      switchMap(() =>
        tenantApiService.getAll$().pipe(
          map(({ data, count }) =>
            AdminTenantListActions.loadAllTenantsSuccess({
              data,
              count,
              message: 'Tenant list loaded successfully',
            })
          ),
          catchError(() =>
            of(
              AdminTenantListActions.loadAllTenantsFailure({
                message: 'Tenant list loaded unsuccessfully',
              })
            )
          )
        )
      )
    ),
  { functional: true }
);

export const deleteTenantEffect = createEffect(
  (action$ = inject(Actions)) =>
    action$.pipe(
      ofType(AdminTenantListActions.deleteTenant),
      switchMap(() =>
        of({}).pipe(
          map(() =>
            AdminTenantListActions.deleteTenantSuccess({
              id: '0',
              message: 'Tenant deleted successfully',
            })
          ),
          catchError(() =>
            of(
              AdminTenantListActions.deleteTenantFailure({
                message: 'Tenant deleted unsuccessfully',
              })
            )
          )
        )
      )
    ),
  { functional: true }
);
