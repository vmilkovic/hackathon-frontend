import { Route } from '@angular/router';
import { AdminTenantShellComponent } from './admin-tenant-shell.component';

export const adminTenantRoutes: Route[] = [
  {
    path: '',
    component: AdminTenantShellComponent,
    providers: [],
  },
];
