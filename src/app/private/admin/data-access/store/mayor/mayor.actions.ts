import {
  MayorRequestFailure,
  MayorRequestSuccess,
} from '@admin/data-access/models/mayor/mayor-api.model';
import { createActionGroup, props } from '@ngrx/store';

export const AdminMayorActions = createActionGroup({
  source: 'Admin mayor',
  events: {
    'Mayor request success': props<MayorRequestSuccess>(),
    'Mayor request failure': props<MayorRequestFailure>(),
  },
});
