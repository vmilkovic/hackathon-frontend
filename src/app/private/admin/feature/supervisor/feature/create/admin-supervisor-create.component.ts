import { SupervisorCreateFormService } from '@admin/feature/supervisor/data-access/services/create/supervisor-create-form.service';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-admin-supervisor-create',
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
  templateUrl: './admin-supervisor-create.component.html',
})
export class AdminSupervisorCreateComponent implements OnInit {
  private supervisorCreateFormService = inject(SupervisorCreateFormService);

  createSupervisorForm =
    this.supervisorCreateFormService.getCreateSupervisorForm();

  tenants = this.supervisorCreateFormService.getTenantsSignal();
  isTenantsLoading =
    this.supervisorCreateFormService.getIsTenantsLoadingSignal();

  ngOnInit(): void {
    this.supervisorCreateFormService.initCreateSupervisorFormService();
  }

  onSubmit() {
    this.supervisorCreateFormService.submitForm();
  }
}
