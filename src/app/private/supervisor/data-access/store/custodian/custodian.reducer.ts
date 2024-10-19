import { Action, ActionReducer, combineReducers } from '@ngrx/store';
import { CustodianState } from '@supervisor/data-access/models/custodian/custodian-store.model';
import {
  custodianCreateReducer,
  custodianCreateReducerKey,
} from '@supervisor/feature/custodian/data-access/store/create/custodian-create.reducer';

export const custodianReducerKey = 'custodian';

export const custodianReducer: ActionReducer<
  CustodianState,
  Action<string>
> = combineReducers({
  [custodianCreateReducerKey]: custodianCreateReducer,
});
