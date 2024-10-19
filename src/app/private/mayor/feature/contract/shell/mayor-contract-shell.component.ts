import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mayor-contract-shell',
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet/>',
})
export class MayorContractShellComponent {}
