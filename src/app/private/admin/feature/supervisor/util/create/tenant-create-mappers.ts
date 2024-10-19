import { Action } from '@ngrx/store';
import { omit } from 'lodash';
import { CreateSupervisorRequest } from '../../data-access/model/create/supervisor-create-api.model';
import { CreateSupervisorFormInputFields } from '../../data-access/model/create/supervisor-create-store.model';

export const mapCreateSupervisorFormInputFieldsToCreateSupervisorRequest = (
  createSupervisorFormInputFields: CreateSupervisorFormInputFields & Action
): CreateSupervisorRequest => omit(createSupervisorFormInputFields, 'type');
