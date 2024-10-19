import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListResult } from '../../models/api-models/list-result.model';
import { ITenant } from '../../models/tenant/tenant.model';
import { IVenue } from '../../models/venue/venue.model';

@Injectable({
  providedIn: 'root',
})
export class TenantsService {
  private http = inject(HttpClient);
  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/public/tenants`;

  /**
   * Retrieves all tenants from the API.
   *
   * @returns An observable that emits an array of tenants.
   * @throws Error if the request fails.
   */
  public findALl(): Observable<ITenant[]> {
    return this.http
      .get<IListResult<ITenant[]>>(`${this.baseURL}/all`)
      .pipe(map((res) => res.data ?? []));
  }

  /**
   * Retrieves all venues associated with a specific tenant.
   *
   * @param tenantId - The unique identifier of the tenant.
   * @returns An Observable that emits the tenant's venues.
   */
  public findAllVenuesForTenant(tenantId: string): Observable<IVenue[]> {
    return this.http
      .get<IListResult<IVenue[]>>(`${this.baseURL}/${tenantId}/venues`)
      .pipe(map((res) => res.data ?? []));
  }
}
