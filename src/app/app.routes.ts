import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { MyReservationsComponent } from '@user/my-reservations/my-reservations.component';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';
import { MyReservationsEffects } from './shared/store/my-reservations/my-reservations.effects';
import { myReservationsFeature } from './shared/store/my-reservations/my-reservations.store';
import { ReservationRequestsEffects } from './shared/store/reservation-requests/reservation-requests.effects';
import { reservationRequestsFeature } from './shared/store/reservation-requests/reservations.store';
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
        path: 'mayor',
        canActivate: [],
        data: {
          roles: [],
        },
        loadChildren: () =>
          import('@mayor/shell/mayor.routes').then((mod) => mod.mayorRoutes),
      },
      {
        path: 'user',
        canActivate: [],
        data: {
          roles: [],
        },
        loadChildren: () =>
          import('@user/shell/user.routes').then((mod) => mod.userRoutes),
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
        path: 'my-reservations',
        providers: [
          provideState(myReservationsFeature),
          provideEffects(MyReservationsEffects),
        ],
        component: MyReservationsComponent,
      },
      {
        path: '',
        component: PublicHomeComponent,
        pathMatch: 'full',
      },
    ],
  },
];
