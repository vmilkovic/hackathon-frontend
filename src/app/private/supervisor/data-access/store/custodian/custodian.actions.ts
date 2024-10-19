import { createActionGroup, props } from '@ngrx/store';
import { CustodianRequestSuccess } from '@supervisor/data-access/models/custodian/custodian-api.model';
import { VenueRequestFailure } from '@supervisor/data-access/models/venue/venue-api.model';

export const SupervisorCustodianActions = createActionGroup({
  source: 'Supervisor Custodian',
  events: {
    'Custodian request success': props<CustodianRequestSuccess>(),
    'Custodian request failure': props<VenueRequestFailure>(),
  },
});
