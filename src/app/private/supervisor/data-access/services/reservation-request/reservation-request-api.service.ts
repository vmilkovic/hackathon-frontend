import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoadAllReservationRequestsResponse } from '@supervisor/feature/reservation-request/data-access/models/list/reservation-request-load-api-model';
import { InitializeContractRequest } from '@supervisor/feature/reservation-request/data-access/models/list/resevation-request-initialize-contract.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationRequestApiService {
  private http = inject(HttpClient);

  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/supervisor`;

  initializeContract$(
    reservationRequestInitializeContract: InitializeContractRequest
  ) {
    this.http.post(
      `${this.baseURL}/reservation-requests/${reservationRequestInitializeContract.id}/initialize-contract`,
      reservationRequestInitializeContract
    );
  }

  getAll$() {
    return this.http.get<LoadAllReservationRequestsResponse>(
      `${this.baseURL}/reservation-requests`
    );
  }
}
