import {
  Venue,
  VenueId,
} from '@supervisor/data-access/models/venue/venue.model';

export type CreateVenueRequest = Omit<Venue, 'id'>;

export interface CreateVenueResponse extends Venue {
  id: VenueId;
}

export interface CreateVenueSuccess {
  id: VenueId;
  message: string;
}

export interface CreateVenueFailure {
  message: string;
}
