import { TenantApiService } from '@admin/data-access/services/tenant/tenant-api.service';
import { AdminTenantCreateActions } from '@admin/feature/tenant/data-access/store/create/tenant-create.actions';
import { mapCreateTenantFormInputFieldsToCreateTenantRequest } from '@admin/feature/tenant/util/create/tenant-create-mappers';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

export const createTenantEffect = createEffect(
  (action$ = inject(Actions), tenantApiService = inject(TenantApiService)) =>
    action$.pipe(
      ofType(AdminTenantCreateActions.createTenantFormSubmitted),
      switchMap((payload) =>
        tenantApiService
          .create$(mapCreateTenantFormInputFieldsToCreateTenantRequest(payload))
          .pipe(
            map(({ id }) =>
              AdminTenantCreateActions.createTenantSuccess({
                id,
                message: 'Create tenant success',
              })
            ),
            catchError(() =>
              of(
                AdminTenantCreateActions.createTenantFailure({
                  message: 'Create tenant failure',
                })
              )
            )
          )
      )
    ),
  { functional: true }
);
