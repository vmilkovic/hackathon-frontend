import { SupervisorFormService } from '@admin/data-access/services/supervisor/supervisor-form.service';
import { mapSupervisorFormInputValuesToActionFormInputs } from '@admin/feature/supervisor/util/supervisor-form-input-mappers';
import { computed, DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { forEach, get, isEmpty, keys } from 'lodash';
import { combineLatest, debounceTime, first } from 'rxjs';
import { AdminSupervisorEditActions } from '../../store/edit/supervisor-edit.actions';
import {
  selectIsSupervisorEditLoading,
  selectSupervisorEditFormInputFields,
} from '../../store/edit/supervisor-edit.selectors';

@Injectable({
  providedIn: 'root',
})
export class SupervisorEditFormService {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  private supervisorFormService = inject(SupervisorFormService);

  private editSupervisorForm = this.supervisorFormService.buildSupervisorForm();
  private tenants = this.supervisorFormService.getTenantsSignal();
  private isTenantsLoading = computed(() => isEmpty(this.tenants()));

  getEditSupervisorForm() {
    return this.editSupervisorForm;
  }

  getTenantsSignal() {
    return this.tenants;
  }

  getIsTenantsLoadingSignal() {
    return this.isTenantsLoading;
  }

  initEditSupervisorFormService() {
    this.initPrefillEditSupervisorFormInputFieldValues();
    this.initCreateSupervisorFormValueChangesSubscription();
  }

  submitForm() {
    this.store.dispatch(
      AdminSupervisorEditActions.updateSupervisorFormSubmitted(
        mapSupervisorFormInputValuesToActionFormInputs(
          this.editSupervisorForm.value
        )
      )
    );
  }

  private initPrefillEditSupervisorFormInputFieldValues() {
    combineLatest({
      supervisorEditFormInputFields: this.store.select(
        selectSupervisorEditFormInputFields
      ),
      isSupervisorEditLoading: this.store.select(selectIsSupervisorEditLoading),
    })
      .pipe(first())
      .subscribe((inputFields) => {
        forEach(keys(inputFields), (inputFieldName) => {
          const inputFieldValue = get(inputFields, inputFieldName);

          this.editSupervisorForm
            .get(inputFieldName)
            ?.setValue(inputFieldValue);
        });
      });
  }

  private initCreateSupervisorFormValueChangesSubscription() {
    this.editSupervisorForm.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((formValues) => {
        this.store.dispatch(
          AdminSupervisorEditActions.updateSupervisorFormChanged({
            inputFields:
              mapSupervisorFormInputValuesToActionFormInputs(formValues),
            isValid: this.editSupervisorForm.valid,
          })
        );
      });
  }
}
