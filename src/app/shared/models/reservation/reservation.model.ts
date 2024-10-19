export interface IReservationRequest {
  venueId: string;
  firstName: string;
  lastName: string;
  city: string;
  streetAddress: string;
  oib: string;
  phone: string;
  bankName: string;
  iban: string;
  purpose: string;
  startDate: Date;
  endDate: Date;
  email: string;
}
