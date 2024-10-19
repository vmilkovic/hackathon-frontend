import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListResult } from '../../models/api-models/list-result.model';
import { IMyReservation } from '../../models/my-reservation/my-reservation.model';

@Injectable({
  providedIn: 'root',
})
export class MyReservationsService {
  private http = inject(HttpClient);
  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/user/my-reservations`;

  /**
   * Retrieves all personal reservations from the API.
   *
   * @returns An observable that emits an array of personal reservations.
   * @throws Error if the request fails.
   */
  public findALl(): Observable<IMyReservation[]> {
    return this.http
      .get<IListResult<IMyReservation[]>>(`${this.baseURL}/all`)
      .pipe(map((res) => res.data ?? []));
  }
}
