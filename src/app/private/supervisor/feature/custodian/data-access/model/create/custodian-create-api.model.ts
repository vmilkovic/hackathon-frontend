import {
  Custodian,
  CustodianId,
} from '@supervisor/data-access/models/custodian/custodian.model';

export type CreateCustodianRequest = Omit<Custodian, 'id'>;

export interface CreateCustodianResponse {
  id: CustodianId;
}

export interface CreateCustodianSuccess {
  id: CustodianId;
  message: string;
}

export interface CreateCustodianFailure {
  message: string;
}
