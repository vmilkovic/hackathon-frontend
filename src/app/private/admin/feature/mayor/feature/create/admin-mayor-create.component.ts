import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MayorCreateFormService } from '../../data-access/services/create/mayor-create-form.service';

@Component({
  selector: 'app-admin-mayor-create',
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
  templateUrl: './admin-mayor-create.component.html',
})
export class AdminMayorCreateComponent implements OnInit {
  private mayorCreateFormService = inject(MayorCreateFormService);

  createMayorForm = this.mayorCreateFormService.getCreateMayorForm();

  tenants = this.mayorCreateFormService.getTenantsSignal();
  isTenantsLoading = this.mayorCreateFormService.getIsTenantsLoadingSignal();

  ngOnInit(): void {
    this.mayorCreateFormService.initCreateMayorFormService();
  }

  onSubmit() {
    this.mayorCreateFormService.submitForm();
  }
}
