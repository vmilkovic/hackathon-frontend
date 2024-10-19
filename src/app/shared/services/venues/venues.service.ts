import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListResult } from '../../models/api-models/list-result.model';
import { IQueryById } from '../../models/api-models/query-by-id.model';
import { IVenueReservation } from '../../models/venue/venue-reservation.model';
import { IVenue } from '../../models/venue/venue.model';

@Injectable({
  providedIn: 'root',
})
export class VenuesService {
  private http = inject(HttpClient);
  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/public/venues`;

  /**
   * Retrieves one venue by its ID.
   *
   * @returns An observable that emits an array of venues.
   * @throws Error if the request fails.
   */
  public findOneById(query: IQueryById): Observable<IVenue> {
    return this.http.get<IVenue | null>(`${this.baseURL}/${query.id}`).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        throw new Error('Entity not found');
      })
    );
  }

  /**
   * Retrieves all reservations for a specific venue.
   *
   * @param query - An object containing the ID of the venue.
   * @returns An Observable that emits an array of venue reservations.
   */
  public findAllReservationsForVenue(
    query: IQueryById
  ): Observable<IVenueReservation[]> {
    return this.http
      .get<
        IListResult<IVenueReservation[]>
      >(`${this.baseURL}/${query.id}/reservations`)
      .pipe(map((response) => response.data ?? []));
  }
}
