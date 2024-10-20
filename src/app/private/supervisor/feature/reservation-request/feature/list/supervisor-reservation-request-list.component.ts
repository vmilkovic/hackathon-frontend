import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ReservationId } from '../../data-access/models/list/reservation-request-load-api-model';
import { ListReservationRequestService } from '../../data-access/services/list/list-reservation-request.service';
import { ReservationRequestInitializeContract } from '../../data-access/services/list/reservation-request-initialize-contract.service';

@Component({
  selector: 'app-supervisor-reservation-request-list.component',
  standalone: true,
  imports: [TableModule, ButtonModule],
  providers: [],
  templateUrl: './supervisor-reservation-request-list.component.html',
})
export class SupervisorReservationRequestListComponent {
  private listReservationRequestService = inject(ListReservationRequestService);
  private reservationRequestInitializeContract = inject(
    ReservationRequestInitializeContract
  );

  reservationRequests =
    this.listReservationRequestService.getAllReservationRequestsSignal() as any;

  onInitializeContract(reservationId: ReservationId) {
    this.reservationRequestInitializeContract.initializeContract({
      id: reservationId,
    });
  }
}
