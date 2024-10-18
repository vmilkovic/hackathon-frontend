import {
  Tenant,
  TenantId,
} from '@admin/data-access/models/tenant/tenant.model';
import { EditTenantFormInputFields } from '@admin/feature/tenant/data-access/models/edit/tenant-edit-store.model';

export type UpdateTenantRequest = Tenant;

export interface UpdateTenantResponse {
  id: TenantId;
}

export interface UpdateTenantSuccess {
  id: TenantId;
  message: string;
  updatedFormFields: EditTenantFormInputFields;
}

export interface UpdateTenantFailure {
  message: string;
}
