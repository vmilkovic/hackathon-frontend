import {
  Supervisor,
  SupervisorId,
} from '@admin/data-access/models/supervisor/supervisor.model';

export type CreateSupervisorRequest = Omit<Supervisor, 'id'>;

export interface CreateSupervisorResponse {
  id: SupervisorId;
}

export interface CreateSupervisorSuccess {
  id: SupervisorId;
  message: string;
}

export interface CreateSupervisorFailure {
  message: string;
}
