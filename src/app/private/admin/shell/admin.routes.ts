import { adminFeature } from '@admin/data-access/store/admin.reducer';
import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { AdminShellComponent } from './admin-shell.component';

export const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminShellComponent,
    providers: [provideState(adminFeature)],
    children: [],
  },
];
