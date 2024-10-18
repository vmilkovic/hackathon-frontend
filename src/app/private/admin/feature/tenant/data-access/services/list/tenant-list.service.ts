import { TenantId } from '@admin/data-access/models/tenant/tenant.model';
import { AdminTenantListActions } from '@admin/feature/tenant/data-access/store/list/tenant-list.actions';
import {
  selectIsTenantListLoading,
  selectTenants,
} from '@admin/feature/tenant/data-access/store/list/tenant-list.selectors';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class TenantListService {
  private store = inject(Store);

  loadAllTenants() {
    this.store.dispatch(AdminTenantListActions.loadAllTenants());
  }

  tenants() {
    return toSignal(this.store.select(selectTenants));
  }

  deleteTenant(id: TenantId) {
    this.store.dispatch(AdminTenantListActions.deleteTenant({ id }));
  }

  isTenantListLoading() {
    return toSignal(this.store.select(selectIsTenantListLoading));
  }
}
