import { CustodianCreateState } from '@supervisor/feature/custodian/data-access/models/create/custodian-create-store.model';

export interface CustodianState {
  create: CustodianCreateState;
}
