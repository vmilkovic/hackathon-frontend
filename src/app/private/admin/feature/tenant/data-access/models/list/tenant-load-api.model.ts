import { Tenant } from '@admin/data-access/models/tenant/tenant.model';

export interface LoadAllTenantsResponse {
  data: LoadAllTenantsResponseTenant[];
  count: number;
}

export type LoadAllTenantsResponseTenant = Omit<Tenant, 'description'>;

export interface LoadAllTenantsSuccess extends LoadAllTenantsResponse {
  message: string;
}

export interface LoadAllTenantsFailure {
  message: string;
}
