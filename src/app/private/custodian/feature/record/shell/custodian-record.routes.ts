import { Route } from '@angular/router';
import { CustodianReservationListComponent } from '@custodian/feature/reservation/list/custodian-reservation-list.component';
import { CustodianRecordShellComponent } from './custodian-record-shell.component';

export const custodianRecordRoutes: Route[] = [
  {
    path: '',
    component: CustodianRecordShellComponent,
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
