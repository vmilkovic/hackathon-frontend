import { TenantCreateState } from '@admin/feature/tenant/data-access/models/create/tenant-create-store.model';
import { TenantEditState } from '@admin/feature/tenant/data-access/models/edit/tenant-edit-store.model';
import { TenantListState } from '@admin/feature/tenant/data-access/models/list/tenant-list-store.model';

export interface TenantState {
  create: TenantCreateState;
  edit: TenantEditState;
  list: TenantListState;
}
