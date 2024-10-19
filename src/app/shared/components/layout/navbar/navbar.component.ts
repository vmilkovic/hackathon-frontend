import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { Subscription } from 'rxjs';
import { Roles } from 'src/app/core/auth/roles/roles.model';
import { environment } from 'src/environments/environment';
import { NavbarProfileComponent } from './navbar-profile/navbar-profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, NavbarProfileComponent],
  providers: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private keycloakService = inject(KeycloakService);

  public currentUser?: KeycloakProfile;
  public items: MenuItem[] = [];
  private subscriptions: Subscription[] = [];
  private userRoles: string[] = [];

  public ngOnInit(): void {
    this.loadMenuItems();

    const isAuthentiated = this.keycloakService.isLoggedIn();
    if (isAuthentiated) {
      this.keycloakService.loadUserProfile().then((profile) => {
        this.currentUser = profile;
        this.loadMenuItems();
      });

      this.userRoles = this.keycloakService.getUserRoles(
        false,
        environment.keycloakClientId
      );
    }
  }

  public signIn(): void {
    this.keycloakService.login();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private loadMenuItems(): void {
    this.items = [
      {
        label: 'Početna',
        routerLink: ['/'],
      },
      {
        label: 'Domovi',
        routerLink: ['/venues'],
      },
      ...this.addMenuItemIfRolesExists(Roles.USER, {
        label: 'Moje rezervacije',
        routerLink: ['/my-reservations'],
      }),
      ...this.addMenuItemIfRolesExists(Roles.ADMIN, {
        label: 'admin',
        items: [],
      }),
    ];
  }

  private addMenuItemIfRolesExists(
    role: Roles | Roles[],
    menuItem: MenuItem
  ): MenuItem[] {
    if (Array.isArray(role)) {
      return role.some((r) => this.userRoles.includes(r)) ? [menuItem] : [];
    }

    return this.userRoles.includes(role) ? [menuItem] : [];
  }
}
