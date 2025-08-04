import { Component, inject, signal, ViewChild } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'main-header',
  imports: [
    RouterModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    CommonModule,
    AvatarModule,
    MenuModule,
    TooltipModule,
  ],
  templateUrl: './main-header.html',
})
export class MainHeader {
  @ViewChild('menu') menu!: Menu;

  // layoutService = inject(LayoutService);
  // authService = inject(UserMainService);
  // localStorageService = inject(LocalstorageService);
  router = inject(Router);

  menuItems: MenuItem[] = [
    {
      label: 'Profil',
      icon: 'pi pi-user',
      command: () => {
        this.goToProfile();
      },
    },
    {
      separator: true,
    },
    {
      label: 'Déconnexion',
      icon: 'pi pi-sign-out',
      command: () => {
        this.logout();
      },
    },
  ];

  // toggleDarkMode() {
  //     this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  //     this.localStorageService.setLayoutConfig(this.layoutService.layoutConfig());
  // }

  toggleMenu(event: Event) {
    this.menu.toggle(event);
  }

  goToProfile() {
    this.router.navigate(['/profile/me']);
  }

  logout() {
    // this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
