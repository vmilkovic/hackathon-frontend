import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import * as adminCustodianEffects from '@supervisor/data-access/store/custodian/custodian.effects';
import { supervisorFeature } from '@supervisor/data-access/store/supervisor.reducer';
import * as adminVenueEffects from '@supervisor/data-access/store/venue/venue.effects';
import * as createCustodianVenueEffects from '@supervisor/feature/custodian/data-access/store/create/custodian-create.effects';
import * as createAdminVenueEffects from '@supervisor/feature/venue/data-access/store/create/venue-create.effects';
import { SupervisorShellComponent } from './supervisor-shell.component';

export const supervisorRoutes: Route[] = [
  {
    path: '',
    component: SupervisorShellComponent,
    providers: [
      provideState(supervisorFeature),
      provideEffects(
        adminVenueEffects,
        adminCustodianEffects,
        createAdminVenueEffects,
        createCustodianVenueEffects
      ),
    ],
    children: [
      {
        path: 'venue',
        loadChildren: () =>
          import(
            '@supervisor/feature/venue/shell/supervisor-venue.routes'
          ).then((mod) => mod.supervisorVenueRoutes),
      },
      {
        path: 'custodian',
        loadChildren: () =>
          import(
            '@supervisor/feature/custodian/shell/supervisor-custodian.routes'
          ).then((mod) => mod.supervisorCustodianRoutes),
      },
      {
        path: 'reservation-request',
        loadChildren: () =>
          import(
            '@supervisor/feature/reservation-request/shell/supervisor-reservation-request.routes'
          ).then((mod) => mod.supervisorReservationRequestRoutes),
      },
    ],
  },
];
