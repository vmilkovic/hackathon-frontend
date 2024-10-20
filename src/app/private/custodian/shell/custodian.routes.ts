import { Route } from '@angular/router';
import { CustodianShellComponent } from './custodian-shell.component';

export const CustodianRoutes: Route[] = [
  {
    path: '',
    component: CustodianShellComponent,
    providers: [],
    children: [
      {
        path: 'reservation',
        loadChildren: () =>
          import(
            '@custodian/feature/reservation/shell/custodian-reservation.routes'
          ).then((mod) => mod.custodianReservationRoutes),
      },
      {
        path: 'record',
        loadChildren: () =>
          import(
            '@custodian/feature/record/shell/custodian-record.routes'
          ).then((mod) => mod.custodianRecordRoutes),
      },
    ],
  },
];
