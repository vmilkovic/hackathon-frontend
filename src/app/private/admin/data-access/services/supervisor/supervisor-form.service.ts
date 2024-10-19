import { TenantId } from '@admin/data-access/models/tenant/tenant.model';
import { TenantApiService } from '@admin/data-access/services/tenant/tenant-api.service';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '@core/validators/confirm-password.validator';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupervisorFormService {
  private tenantApiService = inject(TenantApiService);

  buildSupervisorForm() {
    return new FormGroup(
      {
        tenantId: new FormControl<TenantId>('', [Validators.required]),
        firstName: new FormControl<string>('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        lastName: new FormControl<string>('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        email: new FormControl<string>('', [
          Validators.required,
          Validators.email,
        ]),
        iban: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
        ]),
        password: new FormControl<string>('', [Validators.required]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
      },
      { validators: [confirmPasswordValidator] }
    );
  }

  getTenantsSignal() {
    return toSignal(
      this.tenantApiService.getAll$().pipe(map(({ data }) => data))
    );
  }
}
