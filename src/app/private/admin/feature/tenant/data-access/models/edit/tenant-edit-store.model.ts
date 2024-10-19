import { Tenant } from '@admin/data-access/models/tenant/tenant.model';

export interface TenantEditState {
  form: EditTenantForm;
  isLoading: boolean;
}

export interface EditTenantForm {
  inputFields: EditTenantFormInputFields;
  isValid: boolean;
}

export type EditTenantFormInputFields = Omit<Tenant, 'id'>;
