import { TenantCreateState } from '@admin/feature/tenant/data-access/models/create/tenant-create-store.model';
import { AdminTenantCreateActions } from '@admin/feature/tenant/data-access/store/create/create.actions';
import { createReducer, on } from '@ngrx/store';

export const tenantCreateReducerKey = 'create';

const initialTenantCreateState: TenantCreateState = {
  form: {
    inputFields: {
      name: '',
      description: '',
    },
    isValid: false,
  },
};

export const tenantCreateReducer = createReducer(
  initialTenantCreateState,
  on(
    AdminTenantCreateActions.createTenantFormChanged,
    (state, { inputFields, isValid }) => ({
      ...state,
      form: { inputFields, isValid },
    })
  ),
  on(
    AdminTenantCreateActions.createTenantSuccess,
    () => initialTenantCreateState
  )
);
