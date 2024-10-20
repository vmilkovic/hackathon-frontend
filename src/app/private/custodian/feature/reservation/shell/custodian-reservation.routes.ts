import { Route } from '@angular/router';
import { CustodianReservationListComponent } from '../list/custodian-reservation-list.component';
import { CustodianReservationShellComponent } from './custodian-reservation-shell.component';

export const custodianReservationRoutes: Route[] = [
  {
    path: '',
    component: CustodianReservationShellComponent,
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
        component: CustodianReservationListComponent,
      },
    ],
  },
];
