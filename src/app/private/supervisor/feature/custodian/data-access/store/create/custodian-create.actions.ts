import { createActionGroup, props } from '@ngrx/store';
import {
  CreateCustodianFailure,
  CreateCustodianSuccess,
} from '../../model/create/custodian-create-api.model';
import {
  CreateCustodianFormInputFields,
  CreateCustodianFormPayload,
} from '../../model/create/custodian-create-store.model';

export const SupervisorCustodianCreateActions = createActionGroup({
  source: 'Supervisor Custodian Create',
  events: {
    'Create custodian form changed': props<CreateCustodianFormPayload>(),
    'Create custodian form submitted': props<CreateCustodianFormInputFields>(),
    'Create custodian success': props<CreateCustodianSuccess>(),
    'Create custodian failure': props<CreateCustodianFailure>(),
  },
});
