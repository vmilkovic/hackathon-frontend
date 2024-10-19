import { createActionGroup, props } from '@ngrx/store';
import {
  CreateMayorFailure,
  CreateMayorSuccess,
} from '../../model/create/mayor-create-api.model';
import {
  CreateMayorFormInputFields,
  CreateMayorFormPayload,
} from '../../model/create/mayor-create-store.model';

export const AdminMayorCreateActions = createActionGroup({
  source: 'Admin Mayor Create',
  events: {
    'Create mayor form changed': props<CreateMayorFormPayload>(),
    'Create mayor form submitted': props<CreateMayorFormInputFields>(),
    'Create mayor success': props<CreateMayorSuccess>(),
    'Create mayor failure': props<CreateMayorFailure>(),
  },
});
