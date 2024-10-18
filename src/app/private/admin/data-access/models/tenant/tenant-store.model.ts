import { TenantCreateState } from '@admin/feature/tenant/data-access/models/create/tenant-create-store.model';

export interface TenantState {
  create: TenantCreateState;
}
