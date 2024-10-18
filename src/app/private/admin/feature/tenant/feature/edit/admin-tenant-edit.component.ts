import { TenantEditFormService } from '@admin/feature/tenant/data-access/services/edit/tenant-edit-form.service';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-admin-tenant-edit',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ProgressSpinnerModule,
    ButtonModule,
  ],
  templateUrl: './admin-tenant-edit.component.html',
})
export class AdminTenantEditComponent implements OnInit {
  private tenantEditFormService = inject(TenantEditFormService);
  private activeRoute = inject(ActivatedRoute);

  tenantEditForm = this.tenantEditFormService.getTenantEditForm();

  isTenantEditLoading = this.tenantEditFormService.isTenantEditLoading();

  ngOnInit(): void {
    this.tenantEditFormService.initTenantEditFormService();

    this.activeRoute.params.subscribe((params) =>
      console.log('id', params['id'])
    );
    console.log('active route', this.activeRoute);
  }

  onSubmit() {
    this.tenantEditFormService.submitForm();
  }
}
