import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ITenant } from '../../models/tenant/tenant.model';

export const TenantsActions = createActionGroup({
  source: 'Tenants',
  events: {
    'Load All Tenants': emptyProps(),
    'Load All Tenants Success': props<{ data: ITenant[] }>(),
    'Load All Tenants Failure': props<{ error: string }>(),
    'Select Current Tenant': props<{ tenant: ITenant }>(),
    'Select Current Tenant Success': props<{ tenant: ITenant }>(),
    'Select Current Tenant Failure': props<{ error: string }>(),
  },
});
