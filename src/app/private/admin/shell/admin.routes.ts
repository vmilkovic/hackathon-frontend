import * as adminEffects from '@admin/data-access/store/admin.effects';
import { adminFeature } from '@admin/data-access/store/admin.reducer';
import * as adminMayorEffects from '@admin/data-access/store/mayor/mayor.effects';
import * as adminSupervisorEffects from '@admin/data-access/store/supervisor/supervisor.effects';
import * as adminTenantEffects from '@admin/data-access/store/tenant/tenant.effects';
import * as createAdminMayorEffects from '@admin/feature/mayor/data-access/store/create/mayor-create.effects';
import * as createAdminSupervisorEffects from '@admin/feature/supervisor/data-access/store/create/supervisor-create.effects';
import * as createAdminTenantEffects from '@admin/feature/tenant/data-access/store/create/tenant-create.effects';
import * as editAdminTenantEffects from '@admin/feature/tenant/data-access/store/edit/tenant-edit.effects';
import * as listAdminTenantEffects from '@admin/feature/tenant/data-access/store/list/tenant-list.effects';
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
        adminSupervisorEffects,
        adminMayorEffects,
        createAdminTenantEffects,
        createAdminSupervisorEffects,
        createAdminMayorEffects,
        editAdminTenantEffects,
        listAdminTenantEffects
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
      {
        path: 'supervisor',
        loadChildren: () =>
          import(
            '@admin/feature/supervisor/shell/admin-supervisor.routes'
          ).then((mod) => mod.adminSupervisorRoutes),
      },
      {
        path: 'mayor',
        loadChildren: () =>
          import('@admin/feature/mayor/shell/admin-mayor.routes').then(
            (mod) => mod.adminMayorRoutes
          ),
      },
    ],
  },
];
