import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { exhaustMap, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TenantsService } from '../../services/tenants/tenants.service';
import { VenuesService } from '../../services/venues/venues.service';
import { tenantsFeature } from '../tenants/tenants.store';
import { VenuesActions } from './venues.actions';
import { venuesFeature } from './venues.store';

@Injectable()
export class VenuesEffects {
  private actions$ = inject(Actions);
  private venuesService = inject(VenuesService);
  private tenantsService = inject(TenantsService);
  private router = inject(Router);
  private store = inject(Store);

  public loadAllVenuesForCurrentTenant$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VenuesActions.loadAllVenuesForCurrentTenant),
      switchMap(() => this.store.select(tenantsFeature.selectCurrentTenant)),
      exhaustMap((currentTenant) => {
        if (!currentTenant) {
          return of(
            VenuesActions.loadAllVenuesForCurrentTenantFailure({
              error: 'No tenant found',
            })
          );
        }

        return this.tenantsService
          .findAllVenuesForTenant(currentTenant.id)
          .pipe(
            map((data) => {
              // TODO: Remove after implementing real data
              const mappedData = data.map((venue) => {
                return {
                  ...venue,
                  images: Array.from({ length: 5 }, (_, i) => ({
                    id: i.toString(),
                    url: `https://picsum.photos/1920/1080?random=${i}`,
                  })),
                };
              });

              return VenuesActions.loadAllVenuesForCurrentTenantSuccess({
                data: mappedData,
              });
            }),
            catchError((error) =>
              of(VenuesActions.loadAllVenuesForCurrentTenantFailure({ error }))
            )
          );
      })
    );
  });

  public loadVenueById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VenuesActions.loadCurrentVenueById),
      concatLatestFrom(() =>
        this.store.select(venuesFeature.selectVenuesForCurrentTenant)
      ),
      exhaustMap(([action, venues]) => {
        // Try to find the venue in the store
        const venue = venues.find((venue) => venue.id === action.id);

        if (venue) {
          return of(VenuesActions.loadCurrentVenueByIdSuccess({ data: venue }));
        }

        // If the venue is not found in the store, fetch it from the API
        return this.venuesService
          .findOneById({
            id: action.id,
          })
          .pipe(
            map((venue) => {
              // TODO: Remove after implementing real data
              const mappedVenue = {
                ...venue,
                images: Array.from({ length: 5 }, (_, i) => ({
                  id: i.toString(),
                  url: `https://picsum.photos/1920/1080?random=${i}`,
                })),
              };

              return VenuesActions.loadCurrentVenueByIdSuccess({
                data: mappedVenue,
              });
            }),
            catchError((error) => {
              this.router.navigate(['/venues']);
              return of(VenuesActions.loadCurrentVenueByIdFailure({ error }));
            })
          );
      })
    );
  });
}
