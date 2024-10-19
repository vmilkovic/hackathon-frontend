import { createFeature, createReducer, on } from '@ngrx/store';
import { ReservationRequestsActions } from './reservation-requests.actions';

export const reservationRequestsFeatureKey = 'reservationRequests';

interface ReservationRequestsState {
  loading: boolean;
  error: string;
}

export const initialState: ReservationRequestsState = {
  loading: false,
  error: '',
};

const reducer = createReducer(
  initialState,
  on(
    ReservationRequestsActions.createReservationRequestForCurrentVenueFailure,
    (state): ReservationRequestsState => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(
    ReservationRequestsActions.createReservationRequestForCurrentVenueSuccess,
    (state): ReservationRequestsState => {
      return {
        ...state,
        loading: false,
      };
    }
  ),
  on(
    ReservationRequestsActions.createReservationRequestForCurrentVenueFailure,
    (state, action): ReservationRequestsState => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  )
);

export const reservationRequestsFeature = createFeature({
  name: reservationRequestsFeatureKey,
  reducer,
});
