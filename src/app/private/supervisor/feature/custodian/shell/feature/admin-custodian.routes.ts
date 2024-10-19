import { AdminCustodianCreateComponent } from '@admin/feature/custodian/feature/create/admin-custodian-create.component';
import { AdminCustodianDetailComponent } from '@admin/feature/custodian/feature/detail/admin-custodian-detail.component';
import { AdminCustodianListComponent } from '@admin/feature/custodian/feature/list/admin-custodian-list.component';
import { Route } from '@angular/router';
import { AdminCustodianComponent } from './admin-custodian.component';

export const adminCustodianRoutes: Route[] = [
  {
    path: '',
    component: AdminCustodianComponent,
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
        component: AdminCustodianListComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: AdminCustodianCreateComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: AdminCustodianDetailComponent,
      },
    ],
  },
];
