import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import {
  CreateVenueRequest,
  CreateVenueResponse,
} from '@supervisor/feature/venue/data-access/models/create/venue-create-api.model';
import { LoadAllVenuesResponse } from '@supervisor/feature/venue/data-access/models/list/venue-load-api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VenueApiService {
  private http = inject(HttpClient);

  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/supervisor`;

  create$(createVenueRequest: CreateVenueRequest) {
    return this.http.post<CreateVenueResponse>(
      `${this.baseURL}/venues`,
      createVenueRequest
    );
  }

  update$() {}

  delete$() {}

  getAll$() {
    return this.http.get<LoadAllVenuesResponse>(`${this.baseURL}/venues/all`);
  }
}
