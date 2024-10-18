import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Hackathon',
    children: [
      {
        path: 'admin',
        canActivate: [],
        data: {
          roles: [],
        },
        loadChildren: () =>
          import('@admin/shell/admin.routes').then((mod) => mod.adminRoutes),
      },
    ],
  },
];
