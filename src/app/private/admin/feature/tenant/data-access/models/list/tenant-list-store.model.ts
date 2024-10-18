import { Tenant } from '@admin/data-access/models/tenant/tenant.model';

export interface TenantListState {
  tenants: Omit<Tenant, 'description'>[];
  isLoading: boolean;
}
