import { APP_INITIALIZER } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:9080',
        realm: environment.keycloakRealm,
        clientId: environment.keycloakClientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: true,
    });
}

export const provideKeycloak = () => ({
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  deps: [KeycloakService],
  multi: true,
});
