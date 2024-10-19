import { Action } from '@ngrx/store';
import { omit } from 'lodash';
import { CreateCustodianRequest } from '../../data-access/model/create/custodian-create-api.model';
import { CreateCustodianFormInputFields } from '../../data-access/model/create/custodian-create-store.model';

export const mapCreateCustodianFormInputFieldsToCreateCustodianRequest = (
  createCustodianFormInputFields: CreateCustodianFormInputFields & Action
): CreateCustodianRequest => omit(createCustodianFormInputFields, 'type');
