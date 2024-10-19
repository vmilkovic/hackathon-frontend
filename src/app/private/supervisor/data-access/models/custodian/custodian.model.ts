import { VenueId } from '../venue/venue.model';

export type CustodianId = string;

export interface Custodian {
  id: CustodianId;
  venueId: VenueId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
