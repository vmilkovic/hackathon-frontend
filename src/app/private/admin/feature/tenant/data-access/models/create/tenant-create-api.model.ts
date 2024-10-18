import {
  Tenant,
  TenantId,
} from '@admin/data-access/models/tenant/tenant.model';

export type CreateTenantRequest = Omit<Tenant, 'id'>;

export interface CreateTenantResponse {
  id: TenantId;
}

export interface CreateTenantSuccess {
  id: TenantId;
  message: string;
}

export interface CreateTenantFailure {
  message: string;
}
