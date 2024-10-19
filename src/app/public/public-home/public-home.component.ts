import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-public-home',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './public-home.component.html',
})
export class PublicHomeComponent {}
