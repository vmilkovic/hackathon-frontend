import { Route } from '@angular/router';
import { AdminMayorCreateComponent } from '../feature/create/admin-mayor-create.component';
import { AdminMayorShellComponent } from './admin-mayor-shell.component';

export const adminMayorRoutes: Route[] = [
  {
    path: '',
    component: AdminMayorShellComponent,
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
        component: AdminMayorCreateComponent,
      },
    ],
  },
];
