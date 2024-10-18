import { Tenant } from '@admin/data-access/models/tenant/tenant.model';

export interface TenantCreateState {
  form: CreateTenantForm;
}

export interface CreateTenantForm {
  inputFields: CreateTenantFormInputFields;
  isValid: boolean;
}

export type CreateTenantFormInputFields = Omit<Tenant, 'id'>;
