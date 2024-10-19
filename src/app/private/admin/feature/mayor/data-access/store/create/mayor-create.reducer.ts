import { createReducer, on } from '@ngrx/store';
import { omit } from 'lodash';
import { MayorCreateState } from '../../model/create/mayor-create-store.model';
import { AdminMayorCreateActions } from './mayor-create.actions';

export const mayorCreateReducerKey = 'create';

const initialMayorCreateState: MayorCreateState = {
  form: {
    inputFields: {
      tenantId: '',
      firstName: '',
      lastName: '',
      email: '',
    },
    isValid: false,
  },
};

export const mayorCreateReducer = createReducer(
  initialMayorCreateState,
  on(
    AdminMayorCreateActions.createMayorFormChanged,
    (state, { inputFields, isValid }) => ({
      ...state,
      form: { inputFields: omit(inputFields, ['password']), isValid },
    })
  ),
  on(AdminMayorCreateActions.createMayorSuccess, () => initialMayorCreateState)
);
