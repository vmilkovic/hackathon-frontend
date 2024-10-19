import { createReducer } from '@ngrx/store';
import { SupervisorEditState } from '../../model/edit/supervisor-edit-store.model';

export const supervisorEditReducerKey = 'edit';

const initialSupervisorEditState: SupervisorEditState = {
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
  isLoading: false,
};

export const supervisorEditReducer = createReducer(initialSupervisorEditState);
