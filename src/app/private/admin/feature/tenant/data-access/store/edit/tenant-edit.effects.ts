import { TenantApiService } from '@admin/data-access/services/tenant/tenant-api.service';
import { mapEditTenantFormInputFieldsToUpdateTenantRequest } from '@admin/feature/tenant/util/edit/tenant-update-mappers';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { selectRouteNestedParam } from 'src/app/shared/store/router/router.selectors';
import { AdminTenantEditActions } from './tenant-edit.actions';

export const updateTenantEffect = createEffect(
  (
    action$ = inject(Actions),
    tenantApiService = inject(TenantApiService),
    store = inject(Store)
  ) =>
    action$.pipe(
      ofType(AdminTenantEditActions.updateTenantFormSubmitted),
      withLatestFrom(store.select(selectRouteNestedParam('id'))),
      switchMap(([payload, id]) =>
        tenantApiService
          .update$(
            mapEditTenantFormInputFieldsToUpdateTenantRequest(payload, id)
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
