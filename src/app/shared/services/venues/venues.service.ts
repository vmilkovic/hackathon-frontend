import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IQueryById } from '../../models/api-models/query-by-id.model';
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
}
