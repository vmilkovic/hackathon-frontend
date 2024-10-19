import { Mayor } from '@admin/data-access/models/mayor/mayor.model';

export interface MayorEditState {
  form: EditMayorForm;
  isLoading: boolean;
}

export interface EditMayorForm {
  inputFields: Omit<EditMayorFormInputFields, 'password'>;
  isValid: boolean;
}

export type EditMayorFormInputFields = Omit<Mayor, 'id'>;
