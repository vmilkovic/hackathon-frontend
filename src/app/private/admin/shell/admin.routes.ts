import * as adminEffects from '@admin/data-access/store/admin.effects';
import { adminFeature } from '@admin/data-access/store/admin.reducer';
import * as adminTenantEffects from '@admin/data-access/store/tenant/tenant.effects';
import * as createAdminTenantEffects from '@admin/feature/tenant/data-access/store/create/tenant-create.effects';
import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { AdminShellComponent } from './admin-shell.component';

export const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminShellComponent,
    providers: [
      provideState(adminFeature),
      provideEffects(
        adminEffects,
        adminTenantEffects,
        createAdminTenantEffects
      ),
    ],
    children: [
      {
        path: 'tenant',
        loadChildren: () =>
          import('@admin/feature/tenant/shell/admin-tenant.routes').then(
            (mod) => mod.adminTenantRoutes
          ),
      },
    ],
  },
];
