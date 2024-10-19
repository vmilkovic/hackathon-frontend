import { TenantId } from '../tenant/tenant.model';

export type MayorId = string;

export interface Mayor {
  id: MayorId;
  tenantId: TenantId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
