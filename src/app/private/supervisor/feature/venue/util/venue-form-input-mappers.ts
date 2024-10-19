import { CreateVenueFormInputFields } from '../data-access/models/create/venue-create-store.model';

export const mapVenueFormInputValuesToActionFormInputs = (
  formValues: Partial<{
    name: string | null;
    description: string | null;
    capacity: number | null;
    price: number | null;
    securityDeposit: number | null;
    isRentable: boolean | null;
    location: Partial<{
      latitude: number | null;
      longitude: number | null;
      fullAddress: string | null;
    }>;
  }>
): CreateVenueFormInputFields => {
  const {
    name,
    description,
    capacity,
    price,
    securityDeposit,
    isRentable,
    location,
  } = formValues;

  return {
    name: name ?? '',
    description: description ?? '',
    capacity: capacity ?? 0,
    price: price ?? 0,
    securityDeposit: securityDeposit ?? 0,
    isRentable: isRentable ?? false,
    location: {
      latitude: location?.latitude ?? 0,
      longitude: location?.longitude ?? 0,
      fullAddress: location?.fullAddress ?? '',
    },
  };
};
