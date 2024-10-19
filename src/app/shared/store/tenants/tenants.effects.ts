import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TenantsService } from '../../services/tenants/tenants.service';
import { VenuesActions } from '../venues/venues.actions';
import { TenantsActions } from './tenants.actions';

@Injectable()
export class TenantsEffects implements OnInitEffects {
  private actions$ = inject(Actions);
  private tenantsService = inject(TenantsService);

  public ngrxOnInitEffects() {
    return TenantsActions.loadAllTenants();
  }

  public loadAllTenants$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TenantsActions.loadAllTenants),
      exhaustMap(() =>
        this.tenantsService.findALl().pipe(
          map((data) => {
            return TenantsActions.loadAllTenantsSuccess({ data });
          }),
          catchError((error) =>
            of(TenantsActions.loadAllTenantsFailure({ error }))
          )
        )
      )
    );
  });

  public loadAllTenantsSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TenantsActions.loadAllTenantsSuccess),
      map(() => {
        return VenuesActions.loadAllVenuesForCurrentTenant();
      })
    );
  });
}
