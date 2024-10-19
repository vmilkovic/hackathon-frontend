import { Route } from '@angular/router';
import { SupervisorVenueCreateComponent } from '../feature/create/supervisor-venue-create.component';
import { SupervisorVenueShellComponent } from './supervisor-venue-shell.component';

export const supervisorVenueRoutes: Route[] = [
  {
    path: '',
    component: SupervisorVenueShellComponent,
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
        component: SupervisorVenueCreateComponent,
      },
    ],
  },
];
