import { Component } from '@angular/core';
import { VenueLeafletMapService } from '@supervisor/data-access/services/venue/venue-leaflet-map.service';

@Component({
  selector: 'app-user-reservation-list.component',
  standalone: true,
  imports: [],
  providers: [VenueLeafletMapService],
  templateUrl: './user-reservation-list.component.html',
})
export class UserReservationListComponent {}
