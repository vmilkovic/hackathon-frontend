import { IMyReservationDocument } from './my-reservation-document.model';

export interface IMyReservation {
  id: string;
  status: string;
  venueId: string;
  startDate: Date;
  endDate: Date;
  purpose: string;
  documents: IMyReservationDocument[];
}
