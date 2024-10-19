import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { ITenant } from 'src/app/shared/models/tenant/tenant.model';
import { TenantsActions } from 'src/app/shared/store/tenants/tenants.actions';
import { tenantsFeature } from 'src/app/shared/store/tenants/tenants.store';

@Component({
  selector: 'app-tenants-list',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './tenants-list.component.html',
})
export class TenantsListComponent {
  private store = inject(Store);
  public tenants = this.store.selectSignal(tenantsFeature.selectTenants);
  public selectedTenant: ITenant | null = null;

  public onTenantChange(event: DropdownChangeEvent): void {
    const tenant = event.value as ITenant;
    this.store.dispatch(TenantsActions.selectCurrentTenant({ tenant }));
  }
}
