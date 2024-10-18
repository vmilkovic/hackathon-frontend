import { TenantFormService } from '@admin/data-access/services/tenant/tenant-form.service';
import { AdminTenantCreateActions } from '@admin/feature/tenant/data-access/store/create/tenant-create.actions';
import { selectTenantCreateFormInputFields } from '@admin/feature/tenant/data-access/store/create/tenant-create.selectors';
import { mapTenantFormInputValuesToActionFormInputs } from '@admin/feature/tenant/util/tenant-form-input-mappers';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { forEach, get, keys } from 'lodash';
import { debounceTime, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenantCreateFormService {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  private tenantFormService = inject(TenantFormService);

  private createTenantForm = this.tenantFormService.buildTenantForm();

  getCreateTenantForm() {
    return this.createTenantForm;
  }

  initCreateTenantFormService() {
    this.initPrefillCreateTenantFormInputFieldValues();
    this.initCreateTenantFormValueChangesSubscription();
  }

  submitForm() {
    this.store.dispatch(
      AdminTenantCreateActions.createTenantFormSubmitted(
        mapTenantFormInputValuesToActionFormInputs(this.createTenantForm.value)
      )
    );
  }

  private initPrefillCreateTenantFormInputFieldValues() {
    this.store
      .select(selectTenantCreateFormInputFields)
      .pipe(first())
      .subscribe((inputFields) => {
        forEach(keys(inputFields), (inputFieldName) => {
          const inputFieldValue = get(inputFields, inputFieldName);

          this.createTenantForm.get(inputFieldName)?.setValue(inputFieldValue);
        });
      });
  }

  private initCreateTenantFormValueChangesSubscription() {
    this.createTenantForm.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((formValues) => {
        this.store.dispatch(
          AdminTenantCreateActions.createTenantFormChanged({
            inputFields: mapTenantFormInputValuesToActionFormInputs(formValues),
            isValid: this.createTenantForm.valid,
          })
        );
      });
  }
}
