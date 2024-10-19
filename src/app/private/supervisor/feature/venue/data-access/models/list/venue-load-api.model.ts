import { VenueId } from '@supervisor/data-access/models/venue/venue.model';

export interface LoadAllVenuesResponse {
  data: LoadAllVenueResponseTenant[];
  count: number;
}

export interface LoadAllVenueResponseTenant {
  id: VenueId;
  name: string;
}

export interface LoadAllTenantsSuccess extends LoadAllVenuesResponse {
  message: string;
}

export interface LoadAllTenantsFailure {
  message: string;
}
