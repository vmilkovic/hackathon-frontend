import { CreateTenantRequest } from '@admin/feature/tenant/data-access/models/create/tenant-create-api.model';
import { CreateTenantFormInputFields } from '@admin/feature/tenant/data-access/models/create/tenant-create-store.model';
import { Action } from '@ngrx/store';
import { omit } from 'lodash';

export const mapCreateTenantFormInputFieldsToCreateTenantRequest = (
  createTenantFormInputFields: CreateTenantFormInputFields & Action
): CreateTenantRequest => omit(createTenantFormInputFields, 'type');
