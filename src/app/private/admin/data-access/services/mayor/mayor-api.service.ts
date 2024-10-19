import {
  CreateMayorRequest,
  CreateMayorResponse,
} from '@admin/feature/mayor/data-access/model/create/mayor-create-api.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MayorApiService {
  private http = inject(HttpClient);

  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/admin`;

  // INFO: Returns an error on keycloak user on backend
  create$(createMayorRequest: CreateMayorRequest) {
    return this.http.post<CreateMayorResponse>(
      `${this.baseURL}/mayor`,
      createMayorRequest
    );
  }

  update$() {}

  delete$() {}

  getAll$() {}
}
