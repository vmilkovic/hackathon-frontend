import { CreateMayorFormInputFields } from '../data-access/model/create/mayor-create-store.model';

export const mapMayorFormInputValuesToActionFormInputs = (
  formValues: Partial<{
    tenantId: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    confirmPassword: string | null;
  }>
): CreateMayorFormInputFields => ({
  tenantId: formValues.tenantId ?? '',
  firstName: formValues.firstName ?? '',
  lastName: formValues.lastName ?? '',
  email: formValues.email ?? '',
  password: formValues.password ?? '',
});
