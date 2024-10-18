import { TenantApiService } from '@admin/data-access/services/tenant/tenant-api.service';
import { mapEditTenantFormInputFieldsToUpdateTenantRequest } from '@admin/feature/tenant/util/edit/tenant-update-mappers';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AdminTenantEditActions } from './tenant-edit.actions';

export const updateTenantEffect = createEffect(
  (action$ = inject(Actions), tenantApiService = inject(TenantApiService)) =>
    action$.pipe(
      ofType(AdminTenantEditActions.updateTenantFormSubmitted),
      switchMap((payload) =>
        tenantApiService
          .update$(
            mapEditTenantFormInputFieldsToUpdateTenantRequest({
              ...payload,
              id: '1',
            })
          )
          .pipe(
            map(({ id }) =>
              AdminTenantEditActions.updateTenantSuccess({
                id,
                message: 'Update tenant success',
              })
            ),
            catchError(() =>
              of(
                AdminTenantEditActions.updateTenantFailure({
                  message: 'Update tenant failure',
                })
              )
            )
          )
      )
    ),
  { functional: true }
);
