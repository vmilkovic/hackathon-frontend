import { Mayor, MayorId } from '@admin/data-access/models/mayor/mayor.model';

export type CreateMayorRequest = Omit<Mayor, 'id'>;

export interface CreateMayorResponse {
  id: MayorId;
}

export interface CreateMayorSuccess {
  id: MayorId;
  message: string;
}

export interface CreateMayorFailure {
  message: string;
}
