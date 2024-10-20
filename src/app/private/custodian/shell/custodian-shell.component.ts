import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custodian-shell',
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet/>',
})
export class CustodianShellComponent {}
