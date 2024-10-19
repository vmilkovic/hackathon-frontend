import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';
import { ReservationRequestsEffects } from './shared/store/reservations/reservation-requests.effects';
import { reservationRequestsFeature } from './shared/store/reservations/reservations.store';
import { TenantsEffects } from './shared/store/tenants/tenants.effects';
import { tenantsFeature } from './shared/store/tenants/tenants.store';
import { VenuesEffects } from './shared/store/venues/venues.effects';
import { venuesFeature } from './shared/store/venues/venues.store';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    title: 'Hackathon',
    children: [
      {
        path: 'admin',
        canActivate: [],
        data: {
          roles: [],
        },
        loadChildren: () =>
          import('@admin/shell/admin.routes').then((mod) => mod.adminRoutes),
      },
      {
        path: 'supervisor',
        canActivate: [],
        data: {
          roles: [],
        },
        loadChildren: () =>
          import('@supervisor/shell/supervisor.routes').then(
            (mod) => mod.supervisorRoutes
          ),
      },
      {
        path: 'venues',
        providers: [
          provideState(venuesFeature),
          provideState(tenantsFeature),
          provideState(reservationRequestsFeature),
          provideEffects(VenuesEffects),
          provideEffects(TenantsEffects),
          provideEffects(ReservationRequestsEffects),
        ],
        loadChildren: () =>
          import('./public/public-venues/public-venues.routes').then(
            (mod) => mod.publicVenuesRoutes
          ),
      },
      {
        path: '',
        component: PublicHomeComponent,
        pathMatch: 'full',
      },
    ],
  },
];
