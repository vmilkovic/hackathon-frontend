import { Route } from '@angular/router';
import { MayorContractRequestListComponent } from '../list/mayor-contract-request-list.component';
import { MayorContractShellComponent } from './mayor-contract-shell.component';

export const mayorContractRoutes: Route[] = [
  {
    path: '',
    component: MayorContractShellComponent,
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        pathMatch: 'full',
        component: MayorContractRequestListComponent,
      },
    ],
  },
];
