import { createFeature, createReducer, on } from '@ngrx/store';
import { IVenue } from '../../models/venue/venue.model';
import { VenuesActions } from './venues.actions';

export const venuesFeatureKey = 'venues';

interface VenuesState {
  venuesForCurrentTenant: IVenue[];
  currentVenue: IVenue | null;
  loading: boolean;
  error: string;
}

export const initialState: VenuesState = {
  venuesForCurrentTenant: [],
  currentVenue: null,
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
  )
);

export const venuesFeature = createFeature({
  name: venuesFeatureKey,
  reducer,
});
