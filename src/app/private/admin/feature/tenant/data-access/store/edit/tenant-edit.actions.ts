import {
  EditTenantForm,
  EditTenantFormInputFields,
} from '@admin/feature/tenant/data-access/models/edit/tenant-edit-store.model';
import {
  UpdateTenantFailure,
  UpdateTenantSuccess,
} from '@admin/feature/tenant/data-access/models/edit/tenant-update-api.model';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AdminTenantEditActions = createActionGroup({
  source: 'Admin Tenant Edit',
  events: {
    'Load tenant': emptyProps(),
    'Load tenant success': props<EditTenantForm>(),
    'Update tenant form changed': props<EditTenantForm>(),
    'Update tenant form submitted':
      props<Omit<EditTenantFormInputFields, 'id'>>(),
    'Update tenant success': props<UpdateTenantSuccess>(),
    'Update tenant failure': props<UpdateTenantFailure>(),
  },
});
