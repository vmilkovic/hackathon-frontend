import {
  Tenant,
  TenantId,
} from '@admin/data-access/models/tenant/tenant.model';

export type UpdateTenantRequest = Tenant;

export interface UpdateTenantResponse {
  id: TenantId;
}

export interface UpdateTenantSuccess {
  id: TenantId;
  message: string;
}

export interface UpdateTenantFailure {
  message: string;
}
