import {
  CreateTenantFailure,
  CreateTenantSuccess,
} from '@admin/feature/tenant/data-access/models/create/tenant-create-api.model';
import {
  CreateTenantForm,
  CreateTenantFormInputFields,
} from '@admin/feature/tenant/data-access/models/create/tenant-create-store.model';
import { createActionGroup, props } from '@ngrx/store';

export const AdminTenantCreateActions = createActionGroup({
  source: 'Admin Tenant Create',
  events: {
    'Create tenant form changed': props<CreateTenantForm>(),
    'Create tenant form submitted': props<CreateTenantFormInputFields>(),
    'Create tenant success': props<CreateTenantSuccess>(),
    'Create tenant failure': props<CreateTenantFailure>(),
  },
});
