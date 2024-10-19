import { AdminSupervisorCreateComponent } from '@admin/feature/supervisor/feature/create/admin-supervisor-create.component';
import { Route } from '@angular/router';
import { AdminSupervisorEditComponent } from '../feature/edit/admin-supervisor-edit.component';
import { AdminSupervisorShellComponent } from './admin-supervisor-shell.component';

export const adminSupervisorRoutes: Route[] = [
  {
    path: '',
    component: AdminSupervisorShellComponent,
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create',
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: AdminSupervisorCreateComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: AdminSupervisorEditComponent,
      },
    ],
  },
];
