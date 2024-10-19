import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { venuesFeature } from 'src/app/shared/store/venues/venues.store';
import { TenantsListComponent } from '../tenants-list/tenants-list.component';
import { VenueCardComponent } from './venue-card/venue-card.component';
import { VenuesMapComponent } from './venues-map/venues-map.component';

@Component({
  selector: 'app-venues-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TenantsListComponent,
    VenuesMapComponent,
    VenueCardComponent,
  ],
  templateUrl: './venues-list.component.html',
})
export class VenuesListComponent {
  private store = inject(Store);
  public venues = this.store.selectSignal(
    venuesFeature.selectVenuesForCurrentTenant
  );
}
