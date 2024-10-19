import { Custodian } from '@supervisor/data-access/models/custodian/custodian.model';

export interface CustodianCreateState {
  form: CreateCustodianForm;
}

export interface CreateCustodianForm {
  inputFields: Omit<CreateCustodianFormInputFields, 'password'>;
  isValid: boolean;
}

export interface CreateCustodianFormPayload {
  inputFields: CreateCustodianFormInputFields;
  isValid: boolean;
}

export type CreateCustodianFormInputFields = Omit<Custodian, 'id'>;
