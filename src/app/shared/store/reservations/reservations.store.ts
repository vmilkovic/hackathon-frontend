import { createFeature, createReducer, on } from '@ngrx/store';
import { ReservationsActions } from './reservations.actions';

export const reservationsFeatureKey = 'reservations';

interface ReservationsState {
  loading: boolean;
  error: string;
}

export const initialState: ReservationsState = {
  loading: false,
  error: '',
};

const reducer = createReducer(
  initialState,
  on(
    ReservationsActions.createReservationForCurrentVenue,
    (state): ReservationsState => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(
    ReservationsActions.createReservationForCurrentVenueSuccess,
    (state): ReservationsState => {
      return {
        ...state,
        loading: false,
      };
    }
  ),
  on(
    ReservationsActions.createReservationForCurrentVenueFailure,
    (state, action): ReservationsState => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  )
);

export const reservationsFeature = createFeature({
  name: reservationsFeatureKey,
  reducer,
});
