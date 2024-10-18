import { TenantCreateState } from '@admin/feature/tenant/data-access/models/create/tenant-create-store.model';
import { TenantEditState } from '@admin/feature/tenant/data-access/models/edit/tenant-edit-store.model';

export interface TenantState {
  create: TenantCreateState;
  edit: TenantEditState;
}
