import { TenantId } from '@admin/data-access/models/tenant/tenant.model';
import { TenantListService } from '@admin/feature/tenant/data-access/services/list/tenant-list.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-admin-tenant-list',
  standalone: true,
  imports: [RouterLink, ProgressSpinnerModule, ButtonModule],
  templateUrl: './admin-tenant-list.component.html',
})
export class AdminTenantListComponent implements OnInit {
  private tenantListService = inject(TenantListService);

  tenants = this.tenantListService.tenants();
  isTenantListLoading = this.tenantListService.isTenantListLoading();

  ngOnInit(): void {
    this.tenantListService.loadAllTenants();
  }

  onDelete(id: TenantId) {
    this.tenantListService.deleteTenant(id);
  }
}
