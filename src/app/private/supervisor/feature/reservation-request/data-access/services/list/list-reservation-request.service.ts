import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReservationRequestApiService } from '@supervisor/data-access/services/reservation-request/reservation-request-api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListReservationRequestService {
  private reservationRequestApiService = inject(ReservationRequestApiService);

  getAllReservationRequestsSignal() {
    return toSignal(
      this.reservationRequestApiService.getAll$().pipe(map(({ data }) => data))
    );
  }
}
