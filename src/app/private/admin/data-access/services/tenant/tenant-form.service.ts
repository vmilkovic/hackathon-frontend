import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TenantFormService {
  buildTenantForm() {
    return new FormGroup({
      name: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(250),
      ]),
    });
  }
}
