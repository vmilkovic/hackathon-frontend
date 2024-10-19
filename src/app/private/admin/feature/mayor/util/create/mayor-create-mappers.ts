import { Action } from '@ngrx/store';
import { omit } from 'lodash';
import { CreateMayorRequest } from '../../data-access/model/create/mayor-create-api.model';
import { CreateMayorFormInputFields } from '../../data-access/model/create/mayor-create-store.model';

export const mapCreateMayorFormInputFieldsToCreateMayorRequest = (
  createMayorFormInputFields: CreateMayorFormInputFields & Action
): CreateMayorRequest => omit(createMayorFormInputFields, 'type');
