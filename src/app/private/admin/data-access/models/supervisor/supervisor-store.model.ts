import { SupervisorCreateState } from '@admin/feature/supervisor/data-access/model/create/supervisor-create-store.model';
import { SupervisorEditState } from '@admin/feature/supervisor/data-access/model/edit/supervisor-edit-store.model';

export interface SupervisorState {
  create: SupervisorCreateState;
  edit: SupervisorEditState;
}
