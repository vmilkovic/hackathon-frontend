import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IMyReservation } from '../../models/my-reservation/my-reservation.model';
import { MyReservationsService } from '../../services/my-reservations/my-reservations.service';
import { MyReservationsActions } from './my-reservations.actions';

@Injectable()
export class MyReservationsEffects implements OnInitEffects {
  private actions$ = inject(Actions);
  private myReservationsService = inject(MyReservationsService);

  public ngrxOnInitEffects() {
    return MyReservationsActions.loadAllMyReservations();
  }

  public loadAllMyReservations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MyReservationsActions.loadAllMyReservations),
      exhaustMap(() => {
        const mockedData: IMyReservation[] = [
          {
            id: '1',
            venueId: '1',
            status: 'Završeno',
            startDate: new Date('2022-09-01:07:00:00'),
            endDate: new Date('2022-09-01:16:00:00'),
            purpose: 'Karmine',
            documents: [
              {
                url: 'assets/documents/templates/template_ugovor_dom.pdf',
              },
            ],
          },
          {
            id: '2',
            venueId: '2',
            status: 'Prihvaćeno',
            startDate: new Date('2023-09-01:07:00:00'),
            endDate: new Date('2023-09-01:22:00:00'),
            purpose: 'Proslava rođendana',
            documents: [
              {
                url: 'assets/documents/templates/template_ugovor_dom.pdf',
              },
            ],
          },
          {
            id: '3',
            venueId: '3',
            status: 'Čeka potpis',
            startDate: new Date('2024-11-01:07:00:00'),
            endDate: new Date('2024-11-01:22:00:00'),
            purpose: 'Proslava rođendana',
            documents: [
              {
                url: 'assets/documents/templates/template_ugovor_dom.pdf',
              },
            ],
          },
        ];

        // TODO: Remove mock after implementing the API.
        return of(
          MyReservationsActions.loadAllMyReservationsSuccess({
            data: mockedData,
          })
        );

        this.myReservationsService.findALl().pipe(
          map((data) => {
            return MyReservationsActions.loadAllMyReservationsSuccess({ data });
          }),
          catchError((error) =>
            of(MyReservationsActions.loadAllMyReservationsFailure({ error }))
          )
        );
      })
    );
  });
}
