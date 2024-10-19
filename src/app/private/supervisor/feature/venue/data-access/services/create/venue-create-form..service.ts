import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { VenueFormService } from '@supervisor/data-access/services/venue/venue-form.service';
import { mapVenueFormInputValuesToActionFormInputs } from '@supervisor/feature/venue/util/venue-form-input-mappers';
import { debounceTime, first } from 'rxjs';
import { SupervisorVenueCreateActions } from '../../store/create/venue-create.actions';
import { selectVenueCreateFormInputFields } from '../../store/create/venue-create.selectors';

@Injectable({
  providedIn: 'root',
})
export class VenueCreateFormService {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  private venueFormService = inject(VenueFormService);

  private createVenueForm = this.venueFormService.buildVenueForm();

  getCreateVenueForm() {
    return this.createVenueForm;
  }

  initCreateVenueFormService() {
    this.initPrefillCreateVenueFormInputFieldValues();
    this.initCreateVenueFormValueChangesSubscription();
  }

  submitForm() {
    this.store.dispatch(
      SupervisorVenueCreateActions.createVenueFormSubmitted(
        mapVenueFormInputValuesToActionFormInputs(this.createVenueForm.value)
      )
    );
  }

  private initPrefillCreateVenueFormInputFieldValues() {
    this.store
      .select(selectVenueCreateFormInputFields)
      .pipe(first())
      .subscribe(
        ({
          name,
          description,
          capacity,
          isRentable,
          price,
          securityDeposit,
          location: { latitude, longitude, fullAddress },
        }) => {
          this.createVenueForm.get('name')?.setValue(name);
          this.createVenueForm.get('description')?.setValue(description);
          this.createVenueForm.get('capacity')?.setValue(capacity);
          this.createVenueForm.get('isRentable')?.setValue(isRentable);
          this.createVenueForm.get('price')?.setValue(price);
          this.createVenueForm
            .get('securityDeposit')
            ?.setValue(securityDeposit);
          this.createVenueForm.get('location.latitude')?.setValue(latitude);
          this.createVenueForm.get('location.longitude')?.setValue(longitude);
          this.createVenueForm
            .get('location.fullAddress')
            ?.setValue(fullAddress);
        }
      );
  }

  private initCreateVenueFormValueChangesSubscription() {
    this.createVenueForm.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((formValues) => {
        this.store.dispatch(
          SupervisorVenueCreateActions.createVenueFormChanged({
            inputFields: mapVenueFormInputValuesToActionFormInputs(formValues),
            isValid: this.createVenueForm.valid,
          })
        );
      });
  }
}
