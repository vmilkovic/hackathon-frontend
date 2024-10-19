import { Action } from '@ngrx/store';
import { omit } from 'lodash';
import { EditTenantFormInputFields } from '../../data-access/models/edit/tenant-edit-store.model';
import { UpdateTenantRequest } from '../../data-access/models/edit/tenant-update-api.model';

export const mapEditTenantFormInputFieldsToUpdateTenantRequest = (
  updateTenantFormInputFields: EditTenantFormInputFields & Action,
  id: string
): UpdateTenantRequest => ({
  ...omit(updateTenantFormInputFields, 'type'),
  id,
});
