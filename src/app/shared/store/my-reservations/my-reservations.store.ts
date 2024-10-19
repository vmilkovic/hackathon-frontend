import { createFeature, createReducer, on } from '@ngrx/store';
import { IMyReservation } from '../../models/my-reservation/my-reservation.model';
import { MyReservationsActions } from './my-reservations.actions';

export const myReservationsFeatureKey = 'myReservations';

interface MyReservationsState {
  myReservations: IMyReservation[];
  loading: boolean;
  error: string;
}

export const initialState: MyReservationsState = {
  myReservations: [],
  loading: false,
  error: '',
};

const reducer = createReducer(
  initialState,
  on(
    MyReservationsActions.loadAllMyReservations,
    (state): MyReservationsState => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(
    MyReservationsActions.loadAllMyReservationsSuccess,
    (state, action): MyReservationsState => {
      return {
        ...state,
        myReservations: action.data,
        loading: false,
      };
    }
  ),
  on(
    MyReservationsActions.loadAllMyReservationsFailure,
    (state, action): MyReservationsState => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  )
);

export const myReservationsFeature = createFeature({
  name: myReservationsFeatureKey,
  reducer,
});
