export type ReservationId = string;

export interface LoadAllReservationRequestsResponse {
  data: LoadAllReservationRequestResponseTenant[];
  count: number;
  total: number;
}

export interface LoadAllReservationRequestResponseTenant {
  id: ReservationId;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  oib: string;
  phone: string;
  bankName: string;
  iban: string;
  purpose: string;
  startDate: string;
  endDate: string;
}

export interface LoadAllTenantsSuccess
  extends LoadAllReservationRequestsResponse {
  message: string;
}

export interface LoadAllTenantsFailure {
  message: string;
}
