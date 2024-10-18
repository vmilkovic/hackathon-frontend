import {
  DeleteTenantFailure,
  DeleteTenantRequest,
  DeleteTenantSuccess,
} from '@admin/feature/tenant/data-access/models/list/tenant-delete-api.model';
import {
  LoadAllTenantsFailure,
  LoadAllTenantsSuccess,
} from '@admin/feature/tenant/data-access/models/list/tenant-load-api.model';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AdminTenantListActions = createActionGroup({
  source: 'Admin Tenant List',
  events: {
    'Load all tenants': emptyProps(),
    'Load all tenants success': props<LoadAllTenantsSuccess>(),
    'Load all tenants failure': props<LoadAllTenantsFailure>(),
    'Delete tenant': props<DeleteTenantRequest>(),
    'Delete tenant success': props<DeleteTenantSuccess>(),
    'Delete tenant failure': props<DeleteTenantFailure>(),
  },
});
