import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard extends KeycloakAuthGuard {
  constructor(
    protected override router: Router,
    protected keycloakService: KeycloakService
  ) {
    super(router, keycloakService);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloakService.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    return true;
  }
}
