import { TenantId } from '../tenant/tenant.model';

export type SupervisorId = string;

export interface Supervisor {
  id: SupervisorId;
  tenantId: TenantId;
  firstName: string;
  lastName: string;
  email: string;
  iban: string;
  password: string;
}
