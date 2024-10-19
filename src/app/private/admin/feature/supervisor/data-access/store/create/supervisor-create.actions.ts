import { createActionGroup, props } from '@ngrx/store';
import {
  CreateSupervisorFailure,
  CreateSupervisorSuccess,
} from '../../model/create/supervisor-create-api.model';
import {
  CreateSupervisorFormInputFields,
  CreateSupervisorFormPayload,
} from '../../model/create/supervisor-create-store.model';

export const AdminSupervisorCreateActions = createActionGroup({
  source: 'Admin Supervisor Create',
  events: {
    'Create supervisor form changed': props<CreateSupervisorFormPayload>(),
    'Create supervisor form submitted':
      props<CreateSupervisorFormInputFields>(),
    'Create supervisor success': props<CreateSupervisorSuccess>(),
    'Create supervisor failure': props<CreateSupervisorFailure>(),
  },
});
