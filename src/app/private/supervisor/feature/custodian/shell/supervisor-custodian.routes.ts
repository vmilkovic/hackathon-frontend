import { Route } from '@angular/router';
import { SupervisorCustodianCreateComponent } from '../feature/create/supervisor-custodian-create.component';
import { SupervisorCustodianShellComponent } from './supervisor-custodian-shell.component';

export const supervisorCustodianRoutes: Route[] = [
  {
    path: '',
    component: SupervisorCustodianShellComponent,
    providers: [],
    children: [
      {
        path: 'create',
        pathMatch: 'full',
        component: SupervisorCustodianCreateComponent,
      },
    ],
  },
];
