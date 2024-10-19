import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-reservation-shell',
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet/>',
})
export class UserReservationShellComponent {}
