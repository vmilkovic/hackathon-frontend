import { MayorState } from '@admin/data-access/models/mayor/mayor-store.model';
import {
  mayorCreateReducer,
  mayorCreateReducerKey,
} from '@admin/feature/mayor/data-access/store/create/mayor-create.reducer';
import { Action, ActionReducer, combineReducers } from '@ngrx/store';

export const mayorReducerKey = 'mayor';

export const mayorReducer: ActionReducer<
  MayorState,
  Action<string>
> = combineReducers({
  [mayorCreateReducerKey]: mayorCreateReducer,
});
