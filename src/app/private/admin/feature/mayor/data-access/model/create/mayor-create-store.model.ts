import { Mayor } from '@admin/data-access/models/mayor/mayor.model';

export interface MayorCreateState {
  form: CreateMayorForm;
}

export interface CreateMayorForm {
  inputFields: Omit<CreateMayorFormInputFields, 'password'>;
  isValid: boolean;
}

export interface CreateMayorFormPayload {
  inputFields: CreateMayorFormInputFields;
  isValid: boolean;
}

export type CreateMayorFormInputFields = Omit<Mayor, 'id'>;
