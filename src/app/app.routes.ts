import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';
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
        path: 'venues',
        providers: [
          provideState(venuesFeature),
          provideState(tenantsFeature),
          provideEffects(VenuesEffects),
          provideEffects(TenantsEffects),
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
