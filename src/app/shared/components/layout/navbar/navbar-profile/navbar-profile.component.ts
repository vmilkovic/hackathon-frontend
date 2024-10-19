import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-navbar-profile',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    OverlayPanelModule,
    MenuModule,
  ],
  templateUrl: './navbar-profile.component.html',
  styleUrl: './navbar-profile.component.scss',
})
export class NavbarProfileComponent implements OnInit {
  private keycloakService = inject(KeycloakService);

  @Input({
    required: true,
  })
  public currentUser!: KeycloakProfile;
  public profileMenuItems: MenuItem[] = [];
  public userInitials = '';

  public ngOnInit(): void {
    this.userInitials = `${this.currentUser.firstName?.at(0) ?? ''}${this.currentUser.lastName?.at(0) ?? ''}`;

    this.loadMenuItems();
  }

  public signOut(): void {
    this.keycloakService.logout(window.origin);
  }

  private loadMenuItems(): void {
    this.profileMenuItems = [
      {
        label: `${this.currentUser.firstName} ${this.currentUser.lastName}`,
      },
      {
        label: 'Odjava',
        icon: 'pi pi-sign-out',
        command: () => {
          this.signOut();
        },
      },
    ];
  }
}
