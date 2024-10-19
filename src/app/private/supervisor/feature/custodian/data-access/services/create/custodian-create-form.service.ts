import { computed, DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { CustodianFormService } from '@supervisor/data-access/services/custodian/custoidan-form.service';
import { mapCustodianFormInputValuesToActionFormInputs } from '@supervisor/feature/custodian/util/custodian-form-input-mappers';
import { forEach, get, isEmpty, keys } from 'lodash';
import { debounceTime, first } from 'rxjs';
import { SupervisorCustodianCreateActions } from '../../store/create/custodian-create.actions';
import { selectCustodianCreateFormInputFields } from '../../store/create/custodian-create.selectors';

@Injectable({
  providedIn: 'root',
})
export class CustodianCreateFormService {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  private custodianFormService = inject(CustodianFormService);

  private createCustodianForm = this.custodianFormService.buildCustodianForm();
  private venues = this.custodianFormService.getVenueSignal();
  private isVenuesLoading = computed(() => isEmpty(this.venues()));

  getCreateCustodianForm() {
    return this.createCustodianForm;
  }

  getVenuesSignal() {
    return this.venues;
  }

  getIsVenuesLoadingSignal() {
    return this.isVenuesLoading;
  }

  initCreateCustodianFormService() {
    this.initPrefillCreateCustodianFormInputFieldValues();
    this.initCreateCustodianFormValueChangesSubscription();
  }

  submitForm() {
    this.store.dispatch(
      SupervisorCustodianCreateActions.createCustodianFormSubmitted(
        mapCustodianFormInputValuesToActionFormInputs(
          this.createCustodianForm.value
        )
      )
    );
  }

  private initPrefillCreateCustodianFormInputFieldValues() {
    this.store
      .select(selectCustodianCreateFormInputFields)
      .pipe(first())
      .subscribe((inputFields) => {
        forEach(keys(inputFields), (inputFieldName) => {
          const inputFieldValue = get(inputFields, inputFieldName);

          this.createCustodianForm
            .get(inputFieldName)
            ?.setValue(inputFieldValue);
        });
      });
  }

  private initCreateCustodianFormValueChangesSubscription() {
    this.createCustodianForm.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((formValues) => {
        this.store.dispatch(
          SupervisorCustodianCreateActions.createCustodianFormChanged({
            inputFields:
              mapCustodianFormInputValuesToActionFormInputs(formValues),
            isValid: this.createCustodianForm.valid,
          })
        );
      });
  }
}
