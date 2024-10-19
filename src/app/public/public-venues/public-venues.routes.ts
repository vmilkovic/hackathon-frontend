import { Route } from '@angular/router';
import { PublicVenuesComponent } from './public-venues.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { VenuesListComponent } from './venues-list/venues-list.component';

export const publicVenuesRoutes: Route[] = [
  {
    path: '',
    component: PublicVenuesComponent,
    children: [
      {
        path: ':id',
        component: VenueDetailsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: VenuesListComponent,
      },
    ],
  },
];
