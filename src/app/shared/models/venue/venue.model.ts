import { IVenueLocation } from './venue-location.model';

export interface IVenue {
  id: string;
  name: string;
  description: string;
  capacity: number;
  isRentable: boolean;
  location: IVenueLocation;
}

export type ICreateVenue = Omit<IVenue, 'id'>;
