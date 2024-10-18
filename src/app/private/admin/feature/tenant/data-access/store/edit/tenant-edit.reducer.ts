import { TenantEditState } from '@admin/feature/tenant/data-access/models/edit/tenant-edit-store.model';
import { createReducer } from '@ngrx/store';

export const tenantEditReducerKey = 'edit';

const initialTenantEditState: TenantEditState = {
  form: {
    inputFields: {
      name: '',
      description: '',
    },
    isValid: false,
  },
  isLoading: false,
};

export const tenantEditReducer = createReducer(initialTenantEditState);
