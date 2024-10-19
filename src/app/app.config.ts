import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ConfirmationService, MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { metaReducers } from './shared/store/meta-reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
    ConfirmationService,
    MessageService,
    provideStore(
      { router: routerReducer },
      {
        metaReducers,
      }
    ),
    provideStoreDevtools({
      name: 'Hackathon Frontend',
      maxAge: 25,
      logOnly: isDevMode(),
    }),
    provideRouterStore(),
  ],
};
