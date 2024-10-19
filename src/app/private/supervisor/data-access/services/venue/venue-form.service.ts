import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class VenueFormService {
  buildVenueForm() {
    return new FormGroup({
      name: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(250),
      ]),
      capacity: new FormControl<number>(0, [
        Validators.required,
        Validators.max(300),
      ]),
      isRentable: new FormControl<boolean>(false, [Validators.required]),
      price: new FormControl<number>(0, [Validators.required]),
      securityDeposit: new FormControl<number>(0, [Validators.required]),
      location: new FormGroup({
        latitude: new FormControl<number>(0, [Validators.required]),
        longitude: new FormControl<number>(0, [Validators.required]),
        fullAddress: new FormControl<string>('', [
          Validators.required,
          Validators.maxLength(250),
        ]),
      }),
    });
  }
}
