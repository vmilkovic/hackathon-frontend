import { CreateTenantFormInputFields } from '@admin/feature/tenant/data-access/models/create/tenant-create-store.model';
import { EditTenantFormInputFields } from '@admin/feature/tenant/data-access/models/edit/tenant-edit-store.model';

export const mapTenantFormInputValuesToActionFormInputs = (
  formValues: Partial<{
    name: string | null;
    description: string | null;
  }>
): CreateTenantFormInputFields | EditTenantFormInputFields => ({
  name: formValues.name ?? '',
  description: formValues.description ?? '',
});
