import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-mayor-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<router-outlet/>',
})
export class AdminMayorShellComponent {}
