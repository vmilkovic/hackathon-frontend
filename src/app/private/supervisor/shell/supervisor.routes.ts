import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { supervisorFeature } from '@supervisor/data-access/store/supervisor.reducer';
import * as adminVenueEffects from '@supervisor/data-access/store/venue/venue.effects';
import * as createAdminVenueEffects from '@supervisor/feature/venue/data-access/store/create/venue-create.effects';
import { SupervisorShellComponent } from './supervisor-shell.component';

export const supervisorRoutes: Route[] = [
  {
    path: '',
    component: SupervisorShellComponent,
    providers: [
      provideState(supervisorFeature),
      provideEffects(adminVenueEffects, createAdminVenueEffects),
    ],
    children: [
      {
        path: 'venue',
        loadChildren: () =>
          import(
            '@supervisor/feature/venue/shell/supervisor-venue.routes'
          ).then((mod) => mod.supervisorVenueRoutes),
      },
    ],
  },
];
