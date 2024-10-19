import { SupervisorState } from '@admin/data-access/models/supervisor/supervisor-store.model';
import {
  supervisorCreateReducer,
  supervisorCreateReducerKey,
} from '@admin/feature/supervisor/data-access/store/create/supervisor-create.reducer';
import { Action, ActionReducer, combineReducers } from '@ngrx/store';

export const supervisorReducerKey = 'supervisor';

export const supervisorReducer: ActionReducer<
  SupervisorState,
  Action<string>
> = combineReducers({
  [supervisorCreateReducerKey]: supervisorCreateReducer,
});
