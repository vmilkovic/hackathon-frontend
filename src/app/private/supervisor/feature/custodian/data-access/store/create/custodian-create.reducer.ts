import { createReducer, on } from '@ngrx/store';
import { omit } from 'lodash';
import { CustodianCreateState } from '../../model/create/custodian-create-store.model';
import { SupervisorCustodianCreateActions } from './custodian-create.actions';

export const custodianCreateReducerKey = 'create';

const initialCustodianCreateState: CustodianCreateState = {
  form: {
    inputFields: {
      venueId: '',
      firstName: '',
      lastName: '',
      email: '',
    },
    isValid: false,
  },
};

export const custodianCreateReducer = createReducer(
  initialCustodianCreateState,
  on(
    SupervisorCustodianCreateActions.createCustodianFormChanged,
    (state, { inputFields, isValid }) => ({
      ...state,
      form: { inputFields: omit(inputFields, ['password']), isValid },
    })
  ),
  on(
    SupervisorCustodianCreateActions.createCustodianSuccess,
    () => initialCustodianCreateState
  )
);
