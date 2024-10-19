import {
  CreateSupervisorRequest,
  CreateSupervisorResponse,
} from '@admin/feature/supervisor/data-access/models/create/supervisor-create-api.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupervisorApiService {
  private http = inject(HttpClient);

  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/admin`;

  // INFO: Returns an error on keycloak user on backend
  create$(createSupervisorRequest: CreateSupervisorRequest) {
    return this.http.post<CreateSupervisorResponse>(
      `${this.baseURL}/supervisor`,
      createSupervisorRequest
    );
  }

  update$() {}

  delete$() {}

  getAll$() {}
}
