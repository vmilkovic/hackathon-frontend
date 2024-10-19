import { createFeature, createReducer, on } from '@ngrx/store';
import { ITenant } from '../../models/tenant/tenant.model';
import { TenantsActions } from './tenants.actions';

export const tenantsFeatureKey = 'tenants';

interface TenantsState {
  tenants: ITenant[];
  currentTenant: ITenant | null;
  loading: boolean;
  error: string;
}

export const initialState: TenantsState = {
  tenants: [],
  currentTenant: null,
  loading: false,
  error: '',
};

const reducer = createReducer(
  initialState,
  on(TenantsActions.loadAllTenants, (state): TenantsState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TenantsActions.loadAllTenantsSuccess, (state, action): TenantsState => {
    return {
      ...state,
      tenants: action.data,
      loading: false,
    };
  }),
  on(TenantsActions.loadAllTenantsFailure, (state, action): TenantsState => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),
  on(TenantsActions.selectCurrentTenant, (state, action): TenantsState => {
    return {
      ...state,
      currentTenant: action.tenant,
    };
  }),
  on(
    TenantsActions.selectCurrentTenantSuccess,
    (state, action): TenantsState => {
      return {
        ...state,
        currentTenant: action.tenant,
      };
    }
  ),
  on(
    TenantsActions.selectCurrentTenantFailure,
    (state, action): TenantsState => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export const tenantsFeature = createFeature({
  name: tenantsFeatureKey,
  reducer,
});
