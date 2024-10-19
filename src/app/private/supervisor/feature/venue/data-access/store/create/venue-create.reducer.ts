import { createReducer, on } from '@ngrx/store';
import { VenueCreateState } from '../../models/create/venue-create-store.model';
import { SupervisorVenueCreateActions } from './venue-create.actions';

export const venueCreateReducerKey = 'create';

const initialVenueCreateState: VenueCreateState = {
  form: {
    inputFields: {
      name: '',
      description: '',
      capacity: 0,
      isRentable: false,
      price: 0,
      securityDeposit: 0,
      location: {
        latitude: 0,
        longitude: 0,
        fullAddress: '',
      },
    },
    isValid: false,
  },
};

export const venueCreateReducer = createReducer(
  initialVenueCreateState,
  on(
    SupervisorVenueCreateActions.createVenueFormChanged,
    (state, { inputFields, isValid }) => ({
      ...state,
      form: {
        inputFields: {
          ...inputFields,
          location: { ...inputFields.location },
        },
        isValid,
      },
    })
  ),
  on(
    SupervisorVenueCreateActions.createVenueSuccess,
    () => initialVenueCreateState
  )
);
