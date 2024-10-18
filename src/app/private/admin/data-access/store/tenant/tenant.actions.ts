import {
  TenantRequestFailure,
  TenantRequestSuccess,
} from '@admin/data-access/models/tenant/tenant-api.model';
import { createActionGroup, props } from '@ngrx/store';

export const AdminTenantActions = createActionGroup({
  source: 'Admin Tenant',
  events: {
    'Tenant request success': props<TenantRequestSuccess>(),
    'Tenant request failure': props<TenantRequestFailure>(),
  },
});
