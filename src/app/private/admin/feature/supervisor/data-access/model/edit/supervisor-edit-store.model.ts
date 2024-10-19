import { Supervisor } from '@admin/data-access/models/supervisor/supervisor.model';

export interface SupervisorEditState {
  form: EditSupervisorForm;
  isLoading: boolean;
}

export interface EditSupervisorForm {
  inputFields: Omit<EditSupervisorFormInputFields, 'password'>;
  isValid: boolean;
}

export type EditSupervisorFormInputFields = Omit<Supervisor, 'id'>;
