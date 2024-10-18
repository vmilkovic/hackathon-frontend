import { Route } from '@angular/router';
import { AdminTenantCreateComponent } from '../feature/create/admin-create-tenant.component';
import { AdminTenantShellComponent } from './admin-tenant-shell.component';

export const adminTenantRoutes: Route[] = [
  {
    path: '',
    component: AdminTenantShellComponent,
    providers: [],
    children: [
      {
        path: 'create',
        pathMatch: 'full',
        component: AdminTenantCreateComponent,
      },
    ],
  },
];
