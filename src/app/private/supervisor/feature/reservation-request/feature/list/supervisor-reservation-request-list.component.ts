import { Component, inject } from '@angular/core';
import { VenueLeafletMapService } from '@supervisor/data-access/services/venue/venue-leaflet-map.service';
import { ReservationId } from '../../data-access/models/list/reservation-request-load-api-model';

import { ListReservationRequestService } from '../../data-access/services/list/list-reservation-request.service';
import { ReservationRequestInitializeContract } from '../../data-access/services/list/reservation-request-initialize-contract.service';

@Component({
  selector: 'app-supervisor-reservation-request-list.component',
  standalone: true,
  imports: [],
  providers: [VenueLeafletMapService],
  templateUrl: './supervisor-reservation-request-list.component.html',
})
export class SupervisorReservationRequestListComponent {
  private listReservationRequestService = inject(ListReservationRequestService);
  private reservationRequestInitializeContract = inject(
    ReservationRequestInitializeContract
  );

  reservationRequests =
    this.listReservationRequestService.getAllReservationRequestsSignal();

  onInitializeContract(reservationId: ReservationId) {
    this.reservationRequestInitializeContract.initializeContract({
      id: reservationId,
    });
  }
}
