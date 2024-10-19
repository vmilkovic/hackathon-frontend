import { createReducer } from '@ngrx/store';
import { CustodianCreateState } from '../../models/create/custodian-create-store.model';

export const custodianCreateReducerKey = 'create';

const initialCustodianCreateState: CustodianCreateState = {};

export const custodianCreateReducer = createReducer(
  initialCustodianCreateState
);
