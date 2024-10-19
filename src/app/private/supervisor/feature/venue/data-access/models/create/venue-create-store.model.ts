import { Venue } from '@supervisor/data-access/models/venue/venue.model';

export interface VenueCreateState {
  form: CreateVenueForm;
}

export interface CreateVenueForm {
  inputFields: CreateVenueFormInputFields;
  isValid: boolean;
}

export type CreateVenueFormInputFields = Omit<Venue, 'id'>;
