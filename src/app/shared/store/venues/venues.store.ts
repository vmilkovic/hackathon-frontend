import { createFeature, createReducer, on } from '@ngrx/store';
import { IVenueReservation } from '../../models/venue/venue-reservation.model';
import { IVenue } from '../../models/venue/venue.model';
import { VenuesActions } from './venues.actions';

export const venuesFeatureKey = 'venues';

interface VenuesState {
  venuesForCurrentTenant: IVenue[];
  currentVenue: IVenue | null;
  reservationsForCurrentVenue: IVenueReservation[];
  loading: boolean;
  error: string;
}

export const initialState: VenuesState = {
  venuesForCurrentTenant: [],
  currentVenue: null,
  reservationsForCurrentVenue: [],
  loading: false,
  error: '',
};

const reducer = createReducer(
  initialState,
  on(VenuesActions.loadAllVenuesForCurrentTenant, (state): VenuesState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    VenuesActions.loadAllVenuesForCurrentTenantSuccess,
    (state, action): VenuesState => {
      return {
        ...state,
        venuesForCurrentTenant: action.data,
        loading: false,
      };
    }
  ),
  on(
    VenuesActions.loadAllVenuesForCurrentTenantFailure,
    (state, action): VenuesState => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  ),
  on(VenuesActions.loadCurrentVenueById, (state): VenuesState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    VenuesActions.loadCurrentVenueByIdSuccess,
    (state, action): VenuesState => {
      return {
        ...state,
        currentVenue: action.data,
        loading: false,
      };
    }
  ),
  on(
    VenuesActions.loadCurrentVenueByIdFailure,
    (state, action): VenuesState => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  ),
  on(
    VenuesActions.loadAllVenueReservationsForCurrentVenue,
    (state): VenuesState => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(
    VenuesActions.loadAllVenueReservationsForCurrentVenueSuccess,
    (state, action): VenuesState => {
      return {
        ...state,
        reservationsForCurrentVenue: action.data,
        loading: false,
      };
    }
  ),
  on(
    VenuesActions.loadAllVenueReservationsForCurrentVenueFailure,
    (state, action): VenuesState => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  )
);

export const venuesFeature = createFeature({
  name: venuesFeatureKey,
  reducer,
});
