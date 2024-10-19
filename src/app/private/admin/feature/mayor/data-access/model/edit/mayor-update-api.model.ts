import { Mayor, MayorId } from '@admin/data-access/models/mayor/mayor.model';
import { EditMayorFormInputFields } from './mayor-edit-store.model';

export type UpdateMayorRequest = Mayor;

export interface UpdateMayorResponse {
  id: MayorId;
}

export interface UpdateMayorSuccess {
  id: MayorId;
  message: string;
  updatedFormFields: EditMayorFormInputFields;
}

export interface UpdateMayorFailure {
  message: string;
}
