import { Supervisor } from '@admin/data-access/models/supervisor/supervisor.model';

export interface SupervisorCreateState {
  form: CreateSupervisorForm;
}

export interface CreateSupervisorForm {
  inputFields: Omit<CreateSupervisorFormInputFields, 'password'>;
  isValid: boolean;
}

export interface CreateSupervisorFormPayload {
  inputFields: CreateSupervisorFormInputFields;
  isValid: boolean;
}

export type CreateSupervisorFormInputFields = Omit<Supervisor, 'id'>;
