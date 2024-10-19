import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
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
      {
        path: '',
        component: PublicHomeComponent,
        pathMatch: 'full',
      },
    ],
  },
];
