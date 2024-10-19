import { SupervisorFormService } from '@admin/data-access/services/supervisor/supervisor-form.service';
import { TenantApiService } from '@admin/data-access/services/tenant/tenant-api.service';
import { AdminSupervisorCreateActions } from '@admin/feature/supervisor/data-access/store/create/supervisor-create.actions';
import { selectSupervisorCreateFormInputFields } from '@admin/feature/supervisor/data-access/store/create/supervisor-create.selectors';
import { mapSupervisorFormInputValuesToActionFormInputs } from '@admin/feature/supervisor/util/tenant-form-input-mappers';
import { computed, DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { forEach, get, isEmpty, keys } from 'lodash';
import { debounceTime, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupervisorCreateFormService {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  private tenantApiService = inject(TenantApiService);
  private supervisorFormService = inject(SupervisorFormService);

  private createSupervisorForm =
    this.supervisorFormService.buildSupervisorForm();
  private tenants = this.supervisorFormService.getTenantsSignal();
  private isTenantsLoading = computed(() => isEmpty(this.tenants()));

  getCreateSupervisorForm() {
    return this.createSupervisorForm;
  }

  getTenantsSignal() {
    return this.tenants;
  }

  getIsTenantsLoadingSignal() {
    return this.isTenantsLoading;
  }

  initCreateSupervisorFormService() {
    this.initPrefillCreateSupervisorFormInputFieldValues();
    this.initCreateSupervisorFormValueChangesSubscription();
  }

  submitForm() {
    this.store.dispatch(
      AdminSupervisorCreateActions.createSupervisorFormSubmitted(
        mapSupervisorFormInputValuesToActionFormInputs(
          this.createSupervisorForm.value
        )
      )
    );
  }

  private initPrefillCreateSupervisorFormInputFieldValues() {
    this.store
      .select(selectSupervisorCreateFormInputFields)
      .pipe(first())
      .subscribe((inputFields) => {
        forEach(keys(inputFields), (inputFieldName) => {
          const inputFieldValue = get(inputFields, inputFieldName);

          this.createSupervisorForm
            .get(inputFieldName)
            ?.setValue(inputFieldValue);
        });
      });
  }

  private initCreateSupervisorFormValueChangesSubscription() {
    this.createSupervisorForm.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((formValues) => {
        this.store.dispatch(
          AdminSupervisorCreateActions.createSupervisorFormChanged({
            inputFields:
              mapSupervisorFormInputValuesToActionFormInputs(formValues),
            isValid: this.createSupervisorForm.valid,
          })
        );
      });
  }
}
