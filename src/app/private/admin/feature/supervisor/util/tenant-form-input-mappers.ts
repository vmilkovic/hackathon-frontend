import { CreateSupervisorFormInputFields } from '../data-access/model/create/supervisor-create-store.model';

export const mapSupervisorFormInputValuesToActionFormInputs = (
  formValues: Partial<{
    tenantId: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    iban: string | null;
    confirmPassword: string | null;
  }>
): CreateSupervisorFormInputFields => ({
  tenantId: formValues.tenantId ?? '',
  firstName: formValues.firstName ?? '',
  lastName: formValues.lastName ?? '',
  email: formValues.email ?? '',
  iban: formValues.iban ?? '',
  password: formValues.password ?? '',
});
