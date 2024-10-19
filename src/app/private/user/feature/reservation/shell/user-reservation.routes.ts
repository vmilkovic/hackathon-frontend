import { Route } from '@angular/router';
import { UserReservationListComponent } from '../list/user-reservation-list.component';
import { UserReservationShellComponent } from './user-reservation.component';

export const mayorContractRoutes: Route[] = [
  {
    path: '',
    component: UserReservationShellComponent,
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
        component: UserReservationListComponent,
      },
    ],
  },
];
