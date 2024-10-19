import { IVenueImage } from './venue-image.model';
import { IVenueLocation } from './venue-location.model';

export interface IVenue {
  id: string;
  name: string;
  description: string;
  capacity: number;
  isRentable: boolean;
  location: IVenueLocation;
  images: IVenueImage[];
}

export type ICreateVenue = Omit<IVenue, 'id'>;
