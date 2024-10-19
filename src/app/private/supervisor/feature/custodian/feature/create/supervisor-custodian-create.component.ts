import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CustodianCreateFormService } from '../../data-access/services/create/custodian-create-form.service';

@Component({
  selector: 'app-supervisor-custodian-create',
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
  templateUrl: './supervisor-custodian-create.component.html',
})
export class SupervisorCustodianCreateComponent implements OnInit {
  private custodianCreateFormService = inject(CustodianCreateFormService);

  createCustodianForm =
    this.custodianCreateFormService.getCreateCustodianForm();

  venues = this.custodianCreateFormService.getVenuesSignal();
  isVenuesLoading = this.custodianCreateFormService.getIsVenuesLoadingSignal();

  ngOnInit(): void {
    this.custodianCreateFormService.initCreateCustodianFormService();
  }

  onSubmit() {
    this.custodianCreateFormService.submitForm();
  }
}
