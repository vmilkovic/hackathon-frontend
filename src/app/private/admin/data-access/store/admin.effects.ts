import { AdminTenantActions } from '@admin/data-access/store/tenant/tenant.actions';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';
import { AdminMayorActions } from './mayor/mayor.actions';
import { AdminSupervisorActions } from './supervisor/supervisor.actions';

export const adminSuccessEffect = createEffect(
  (actions$ = inject(Actions), messageService = inject(MessageService)) =>
    actions$.pipe(
      ofType(
        AdminTenantActions.tenantRequestSuccess,
        AdminSupervisorActions.supervisorRequestSuccess,
        AdminMayorActions.mayorRequestSuccess
      ),
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
      ofType(
        AdminTenantActions.tenantRequestFailure,
        AdminSupervisorActions.supervisorRequestFailure,
        AdminMayorActions.mayorRequestSuccess
      ),
      tap(({ message }) =>
        messageService.add({
          severity: 'error',
          detail: message,
        })
      )
    ),
  { functional: true, dispatch: false }
);
