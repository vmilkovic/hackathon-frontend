import { inject, Injectable } from '@angular/core';
import { ReservationRequestApiService } from '@supervisor/data-access/services/reservation-request/reservation-request-api.service';
import { InitializeContractRequest } from '../../models/list/resevation-request-initialize-contract.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationRequestInitializeContract {
  private reservationApproveApiService = inject(ReservationRequestApiService);

  initializeContract(
    reservationRequestInitializeContractRequest: InitializeContractRequest
  ) {
    this.reservationApproveApiService.initializeContract$(
      reservationRequestInitializeContractRequest
    );
  }
}
