import { AdminTenantActions } from '@admin/data-access/store/tenant/tenant.actions';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';

export const adminSuccessEffect = createEffect(
  (actions$ = inject(Actions), messageService = inject(MessageService)) =>
    actions$.pipe(
      ofType(AdminTenantActions.tenantRequestSuccess),
      tap(console.log),
      tap(({ message }) =>
        messageService.add({
          severity: 'success',
          detail: message,
        })
      )
    ),
  { functional: true, dispatch: false }
);

export const adminFailureEffect = createEffect(
  (actions$ = inject(Actions), messageService = inject(MessageService)) =>
    actions$.pipe(
      ofType(AdminTenantActions.tenantRequestFailure),
      tap(({ message }) =>
        messageService.add({
          severity: 'error',
          detail: message,
        })
      )
    ),
  { functional: true, dispatch: false }
);
