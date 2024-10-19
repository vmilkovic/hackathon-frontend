import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IReservationRequest } from '../../models/reservation/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationRequestsService {
  private http = inject(HttpClient);
  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/public/reservation-requests`;

  /**
   * Creates a new reservation.
   *
   * @param reservation - The reservation object to be created.
   * @returns An Observable that emits null upon successful creation of the reservation.
   */
  public createReservationRequest(
    reservation: IReservationRequest
  ): Observable<null> {
    return this.http.post<null>(this.baseURL, reservation);
  }
}
