export type VenueId = string;

export interface Venue {
  id: VenueId;
  name: string;
  description: string;
  capacity: number;
  price: number;
  securityDeposit: number;
  isRentable: boolean;
  location: VenueLocation;
}

export interface VenueLocation {
  latitude: number;
  longitude: number;
  fullAddress: string;
}
