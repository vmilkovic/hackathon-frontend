import { createActionGroup, props } from '@ngrx/store';
import {
  EditSupervisorForm,
  EditSupervisorFormInputFields,
} from '../../model/edit/supervisor-edit-store.model';
import {
  UpdateSupervisorFailure,
  UpdateSupervisorSuccess,
} from '../../model/edit/supervisor-update-api.model';

export const AdminSupervisorEditActions = createActionGroup({
  source: 'Admin Supervisor Edit',
  events: {
    'Update supervisor form changed': props<EditSupervisorForm>(),
    'Update supervisor form submitted': props<EditSupervisorFormInputFields>(),
    'Update supervisor success': props<UpdateSupervisorSuccess>(),
    'Update supervisor failure': props<UpdateSupervisorFailure>(),
  },
});
