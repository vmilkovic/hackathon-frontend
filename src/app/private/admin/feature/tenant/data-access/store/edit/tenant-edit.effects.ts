import { TenantApiService } from '@admin/data-access/services/tenant/tenant-api.service';
import { mapEditTenantFormInputFieldsToUpdateTenantRequest } from '@admin/feature/tenant/util/edit/tenant-update-mappers';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AdminTenantEditActions } from './tenant-edit.actions';

export const updateTenantEffect = createEffect(
  (
    action$ = inject(Actions),
    activeRoute = inject(ActivatedRoute),
    tenantApiService = inject(TenantApiService)
  ) =>
    action$.pipe(
      ofType(AdminTenantEditActions.updateTenantFormSubmitted),
      withLatestFrom(activeRoute.paramMap),
      switchMap(([payload, params]) =>
        tenantApiService
          .update$(
            mapEditTenantFormInputFieldsToUpdateTenantRequest({
              id: params.get(':id')!,
              ...payload,
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
