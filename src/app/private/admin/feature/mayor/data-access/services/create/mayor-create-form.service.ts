import { MayorFormService } from '@admin/data-access/services/mayor/mayor-form.service';
import { mapMayorFormInputValuesToActionFormInputs } from '@admin/feature/mayor/util/mayor-form-input-mappers';
import { computed, DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { forEach, get, isEmpty, keys } from 'lodash';
import { debounceTime, first } from 'rxjs';
import { AdminMayorCreateActions } from '../../store/create/mayor-create.actions';
import { selectMayorCreateFormInputFields } from '../../store/create/mayor-create.selectors';

@Injectable({
  providedIn: 'root',
})
export class MayorCreateFormService {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  private mayorFormService = inject(MayorFormService);

  private createMayorForm = this.mayorFormService.buildMayorForm();
  private tenants = this.mayorFormService.getTenantsSignal();
  private isTenantsLoading = computed(() => isEmpty(this.tenants()));

  getCreateMayorForm() {
    return this.createMayorForm;
  }

  getTenantsSignal() {
    return this.tenants;
  }

  getIsTenantsLoadingSignal() {
    return this.isTenantsLoading;
  }

  initCreateMayorFormService() {
    this.initPrefillCreateMayorFormInputFieldValues();
    this.initCreateMayorFormValueChangesSubscription();
  }

  submitForm() {
    this.store.dispatch(
      AdminMayorCreateActions.createMayorFormSubmitted(
        mapMayorFormInputValuesToActionFormInputs(this.createMayorForm.value)
      )
    );
  }

  private initPrefillCreateMayorFormInputFieldValues() {
    this.store
      .select(selectMayorCreateFormInputFields)
      .pipe(first())
      .subscribe((inputFields) => {
        forEach(keys(inputFields), (inputFieldName) => {
          const inputFieldValue = get(inputFields, inputFieldName);

          this.createMayorForm.get(inputFieldName)?.setValue(inputFieldValue);
        });
      });
  }

  private initCreateMayorFormValueChangesSubscription() {
    this.createMayorForm.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((formValues) => {
        this.store.dispatch(
          AdminMayorCreateActions.createMayorFormChanged({
            inputFields: mapMayorFormInputValuesToActionFormInputs(formValues),
            isValid: this.createMayorForm.valid,
          })
        );
      });
  }
}
