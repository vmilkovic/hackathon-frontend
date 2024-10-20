import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoadAllReservationRequestsResponse } from '@supervisor/feature/reservation-request/data-access/models/list/reservation-request-load-api-model';
import { InitializeContractRequest } from '@supervisor/feature/reservation-request/data-access/models/list/resevation-request-initialize-contract.model';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationRequestApiService {
  private http = inject(HttpClient);

  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/supervisor`;

  initializeContract$(
    reservationRequestInitializeContract: InitializeContractRequest
  ) {
    this.http.post(
      `${this.baseURL}/reservation-requests/${reservationRequestInitializeContract.id}/initialize-contract`,
      reservationRequestInitializeContract
    );
  }

  getAll$() {
    return of({
      data: [
        {
          id: '1',
          firstName: 'Ivan',
          lastName: 'Horvat',
          streetAddress: 'Ulica Kralja Zvonimira 10',
          city: 'Bjelovar',
          oib: '12345678901',
          phone: '0912345678',
          bankName: 'Banka Zagreb',
          iban: 'HR1234567890123456789',
          purpose: 'Karmine',
          startDate: '2024-06-01',
          endDate: '2024-06-10',
        },
        {
          id: '2',
          firstName: 'Ana',
          lastName: 'Ivić',
          streetAddress: 'Trg Bana Jelačića 1',
          city: 'Zagreb',
          oib: '98765432109',
          phone: '0987654321',
          bankName: 'Hrvatska Poštanska Banka',
          iban: 'HR9876543210987654321',
          purpose: 'Predavanje',
          startDate: '2024-07-15',
          endDate: '2024-07-20',
        },
        {
          id: '3',
          firstName: 'Marko',
          lastName: 'Mali',
          streetAddress: 'Zagrebačka 5',
          city: 'Split',
          oib: '12312312312',
          phone: '0923456789',
          bankName: 'OTP banka',
          iban: 'HR1112223334445556666',
          purpose: 'Zabava',
          startDate: '2024-08-01',
          endDate: '2024-08-07',
        },
      ],
      count: 3,
      total: 3,
    });

    return this.http.get<LoadAllReservationRequestsResponse>(
      `${this.baseURL}/reservation-requests`
    );
  }
}
