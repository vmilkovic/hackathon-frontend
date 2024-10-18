import { TenantId } from '@admin/data-access/models/tenant/tenant.model';

export interface DeleteTenantRequest {
  id: TenantId;
}

export interface DeleteTenantResponse {
  id: TenantId;
}

export interface DeleteTenantSuccess {
  id: TenantId;
  message: string;
}

export interface DeleteTenantFailure {
  message: string;
}
