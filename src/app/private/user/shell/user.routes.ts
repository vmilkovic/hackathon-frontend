import { Route } from '@angular/router';
import { UserShellComponent } from './user-shell.component';

export const userRoutes: Route[] = [
  {
    path: '',
    component: UserShellComponent,
    providers: [],
    children: [
      {
        path: 'reservation',
        loadChildren: () =>
          import(
            '@user/feature/reservation/shell/user-reservation.routes'
          ).then((mod) => mod.mayorContractRoutes),
      },
    ],
  },
];
