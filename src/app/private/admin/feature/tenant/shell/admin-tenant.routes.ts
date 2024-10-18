import { Route } from '@angular/router';
import { AdminTenantCreateComponent } from '../feature/create/admin-create-tenant.component';
import { AdminTenantEditComponent } from '../feature/edit/admin-tenant-edit.component';
import { AdminTenantListComponent } from '../feature/list/admin-tenant-list.component';
import { AdminTenantShellComponent } from './admin-tenant-shell.component';

export const adminTenantRoutes: Route[] = [
  {
    path: '',
    component: AdminTenantShellComponent,
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        pathMatch: 'full',
        component: AdminTenantListComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: AdminTenantCreateComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: AdminTenantEditComponent,
      },
    ],
  },
];
