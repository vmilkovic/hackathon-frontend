import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '@core/validators/confirm-password.validator';
import { VenueId } from '@supervisor/data-access/models/venue/venue.model';
import { map } from 'rxjs';
import { VenueApiService } from '../venue/venue-api.service';

@Injectable({
  providedIn: 'root',
})
export class CustodianFormService {
  private venueApiService = inject(VenueApiService);

  buildCustodianForm() {
    return new FormGroup(
      {
        venueId: new FormControl<VenueId>('', [Validators.required]),
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
        password: new FormControl<string>('', [Validators.required]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
      },
      { validators: [confirmPasswordValidator] }
    );
  }

  getVenueSignal() {
    return toSignal(
      this.venueApiService.getAll$().pipe(map(({ data }) => data))
    );
  }
}
