import { Route } from '@angular/router';
import { MayorShellComponent } from './mayor-shell.component';

export const mayorRoutes: Route[] = [
  {
    path: '',
    component: MayorShellComponent,
    providers: [],
    children: [
      {
        path: 'contract',
        loadChildren: () =>
          import('@mayor/feature/contract/shell/mayor-contract.routes').then(
            (mod) => mod.mayorContractRoutes
          ),
      },
    ],
  },
];
