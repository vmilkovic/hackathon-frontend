import { AdminSupervisorCreateComponent } from '@admin/feature/supervisor/feature/create/admin-supervisor-create.component';
import { Route } from '@angular/router';
import { AdminSupervisorShellComponent } from './admin-supervisor-shell.component';

export const adminSupervisorRoutes: Route[] = [
  {
    path: '',
    component: AdminSupervisorShellComponent,
    providers: [],
    children: [
      {
        path: 'create',
        pathMatch: 'full',
        component: AdminSupervisorCreateComponent,
      },
    ],
  },
];
