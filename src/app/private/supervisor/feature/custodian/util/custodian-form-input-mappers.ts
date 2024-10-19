import { CreateCustodianFormInputFields } from '../data-access/model/create/custodian-create-store.model';

export const mapCustodianFormInputValuesToActionFormInputs = (
  formValues: Partial<{
    venueId: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    confirmPassword: string | null;
  }>
): CreateCustodianFormInputFields => ({
  venueId: formValues.venueId ?? '',
  firstName: formValues.firstName ?? '',
  lastName: formValues.lastName ?? '',
  email: formValues.email ?? '',
  password: formValues.password ?? '',
});
