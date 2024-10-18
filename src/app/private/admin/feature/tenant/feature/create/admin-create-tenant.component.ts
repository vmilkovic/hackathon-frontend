import { TenantCreateFormService } from '@admin/feature/tenant/data-access/services/create/tenant-create-form..service';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-admin-tenant-create',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
  ],
  templateUrl: './admin-tenant-create.component.html',
})
export class AdminTenantCreateComponent implements OnInit {
  private tenantCreateFormService = inject(TenantCreateFormService);

  createTenantForm = this.tenantCreateFormService.getCreateTenantForm();

  ngOnInit(): void {
    this.tenantCreateFormService.initCreateTenantFormService();
  }

  onSubmit() {
    this.tenantCreateFormService.submitForm();
  }
}
