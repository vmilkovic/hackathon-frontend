import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-supervisor-venue-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<router-outlet/>',
})
export class SupervisorRequestListShellComponent {}
