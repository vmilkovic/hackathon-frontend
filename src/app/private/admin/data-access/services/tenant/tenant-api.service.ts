import {
  CreateTenantRequest,
  CreateTenantResponse,
} from '@admin/feature/tenant/data-access/models/create/tenant-create-api.model';
import { LoadAllTenantsResponse } from '@admin/feature/tenant/data-access/models/list/tenant-load-api.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenantApiService {
  create$(
    createTenantRequest: CreateTenantRequest
  ): Observable<CreateTenantResponse> {
    return of({ id: 'id' });
  }

  update$() {}

  delete$() {}

  getAll$(): Observable<LoadAllTenantsResponse> {
    return of({
      data: [
        { id: '1', name: 'Tenant 1' },
        { id: '2', name: 'Tenant 2' },
      ],
      count: 2,
    });
  }
}
