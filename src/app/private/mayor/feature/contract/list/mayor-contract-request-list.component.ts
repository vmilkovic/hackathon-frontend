import { Component } from '@angular/core';
import { VenueLeafletMapService } from '@supervisor/data-access/services/venue/venue-leaflet-map.service';

@Component({
  selector: 'app-mayor-contract-request-list.component',
  standalone: true,
  imports: [],
  providers: [VenueLeafletMapService],
  templateUrl: './mayor-contract-request-list.component.html',
})
export class MayorContractRequestListComponent {}
