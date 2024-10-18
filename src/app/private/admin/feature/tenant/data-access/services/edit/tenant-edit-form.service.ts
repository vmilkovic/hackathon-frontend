import { TenantFormService } from '@admin/data-access/services/tenant/tenant-form.service';
import { AdminTenantEditActions } from '@admin/feature/tenant/data-access/store/edit/tenant-edit.actions';
import {
  selectIsTenantEditLoading,
  selectTenantEditFormInputFields,
} from '@admin/feature/tenant/data-access/store/edit/tenant-edit.selectors';
import { mapTenantFormInputValuesToActionFormInputs } from '@admin/feature/tenant/util/tenant-form-input-mappers';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { forEach, get, keys } from 'lodash';
import { combineLatest, debounceTime, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenantEditFormService {
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);
  private tenantFormService = inject(TenantFormService);
  private activeRoute = inject(ActivatedRoute);

  private tenantEditForm = this.tenantFormService.buildTenantForm();

  getTenantEditForm() {
    return this.tenantEditForm;
  }

  initTenantEditFormService() {
    this.initPrefillTenantEditFormInputFieldValues();
    this.initTenantEditFormValueChangesSubscription();
  }

  isTenantEditLoading() {
    return toSignal(this.store.select(selectIsTenantEditLoading));
  }

  submitForm() {
    this.store.dispatch(
      AdminTenantEditActions.updateTenantFormSubmitted(
        mapTenantFormInputValuesToActionFormInputs(this.tenantEditForm.value)
      )
    );
  }

  private initPrefillTenantEditFormInputFieldValues() {
    // TODO: This endpoint does not exist to fetch data od specific tenant
    combineLatest({
      tenantEditFormInputFields: this.store.select(
        selectTenantEditFormInputFields
      ),
      isTenantEditLoading: this.store.select(selectIsTenantEditLoading),
    })
      .pipe(first())
      .subscribe(({ tenantEditFormInputFields: inputFields }) => {
        forEach(keys(inputFields), (inputFieldName) => {
          const inputFieldValue = get(inputFields, inputFieldName);

          this.tenantEditForm.get(inputFieldName)?.setValue(inputFieldValue);
        });
      });
  }

  private initTenantEditFormValueChangesSubscription() {
    this.tenantEditForm.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((formValues) => {
        this.store.dispatch(
          AdminTenantEditActions.updateTenantFormChanged({
            inputFields: mapTenantFormInputValuesToActionFormInputs(formValues),
            isValid: this.tenantEditForm.valid,
          })
        );
      });
  }
}
