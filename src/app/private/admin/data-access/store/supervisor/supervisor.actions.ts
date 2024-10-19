import {
  SupervisorRequestFailure,
  SupervisorRequestSuccess,
} from '@admin/data-access/models/supervisor/supervisor-api.model';
import { createActionGroup, props } from '@ngrx/store';

export const AdminSupervisorActions = createActionGroup({
  source: 'Admin Supervisor',
  events: {
    'Supervisor request success': props<SupervisorRequestSuccess>(),
    'Supervisor request failure': props<SupervisorRequestFailure>(),
  },
});
