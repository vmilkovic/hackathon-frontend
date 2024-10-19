import { Route } from '@angular/router';
import { SupervisorReservationRequestListComponent } from '../feature/list/supervisor-reservation-request-list.component';
import { SupervisorRequestListShellComponent } from './supervisor-reservation-request-shell.component';

export const supervisorReservationRequestRoutes: Route[] = [
  {
    path: '',
    component: SupervisorRequestListShellComponent,
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
        component: SupervisorReservationRequestListComponent,
      },
    ],
  },
];
