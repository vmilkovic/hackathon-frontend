import { AdminSupervisorCreateActions } from '@admin/feature/supervisor/data-access/store/create/supervisor-create.actions';
import { createReducer, on } from '@ngrx/store';
import { omit } from 'lodash';
import { SupervisorCreateState } from '../../model/create/supervisor-create-store.model';

export const supervisorCreateReducerKey = 'create';

const initialSupervisorCreateState: SupervisorCreateState = {
  form: {
    inputFields: {
      tenantId: '',
      firstName: '',
      lastName: '',
      email: '',
      iban: '',
    },
    isValid: false,
  },
};

export const supervisorCreateReducer = createReducer(
  initialSupervisorCreateState,
  on(
    AdminSupervisorCreateActions.createSupervisorFormChanged,
    (state, { inputFields, isValid }) => ({
      ...state,
      form: { inputFields: omit(inputFields, ['password']), isValid },
    })
  ),
  on(
    AdminSupervisorCreateActions.createSupervisorSuccess,
    () => initialSupervisorCreateState
  )
);
