import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CreateCustodianRequest,
  CreateCustodianResponse,
} from '@supervisor/feature/custodian/data-access/model/create/custodian-create-api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustodianApiService {
  private http = inject(HttpClient);

  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/supervisor`;

  // INFO: Returns an error on keycloak user on backend
  create$(createCustodianRequest: CreateCustodianRequest) {
    return this.http.post<CreateCustodianResponse>(
      `${this.baseURL}/custodian`,
      createCustodianRequest
    );
  }

  update$() {}

  delete$() {}

  getAll$() {}
}
