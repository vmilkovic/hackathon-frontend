import {
  Supervisor,
  SupervisorId,
} from '@admin/data-access/models/supervisor/supervisor.model';
import { EditSupervisorFormInputFields } from './supervisor-edit-store.model';

export type UpdateSupervisorRequest = Supervisor;

export interface UpdateSupervisorResponse {
  id: SupervisorId;
}

export interface UpdateSupervisorSuccess {
  id: SupervisorId;
  message: string;
  updatedFormFields: EditSupervisorFormInputFields;
}

export interface UpdateSupervisorFailure {
  message: string;
}
