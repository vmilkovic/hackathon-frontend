import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SupervisorEditFormService } from '../../data-access/services/edit/supervisor-edit-form.service';

@Component({
  selector: 'app-admin-supervisor-edit',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    PasswordModule,
  ],
  templateUrl: './admin-supervisor-edit.component.html',
})
export class AdminSupervisorEditComponent implements OnInit {
  private supervisorEditFormService = inject(SupervisorEditFormService);

  supervisorEditForm = this.supervisorEditFormService.getEditSupervisorForm();

  tenants = this.supervisorEditFormService.getTenantsSignal();

  isTenantEditLoading =
    this.supervisorEditFormService.getIsTenantsLoadingSignal();

  ngOnInit(): void {
    this.supervisorEditFormService.initEditSupervisorFormService();
  }

  onSubmit() {
    this.supervisorEditFormService.submitForm();
  }
}
