import {
  CreateTenantRequest,
  CreateTenantResponse,
} from '@admin/feature/tenant/data-access/models/create/tenant-create-api.model';
import {
  UpdateTenantRequest,
  UpdateTenantResponse,
} from '@admin/feature/tenant/data-access/models/edit/tenant-update-api.model';
import { LoadAllTenantsResponse } from '@admin/feature/tenant/data-access/models/list/tenant-load-api.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TenantApiService {
  private http = inject(HttpClient);

  private baseURL = `${environment.apiUrl}/${environment.apiVersion}/admin`;

  create$(createTenantRequest: CreateTenantRequest) {
    return this.http.post<CreateTenantResponse>(
      `${this.baseURL}/tenant`,
      createTenantRequest
    );
  }

  update$(
    updateTenantRequest: UpdateTenantRequest
  ): Observable<UpdateTenantResponse> {
    return of({ id: 'id' });
  }

  delete$(deleteTenantRequest: string) {
    return of('id');
  }

  getAll$() {
    return this.http.get<LoadAllTenantsResponse>(`${this.baseURL}/tenants/all`);
  }
}
