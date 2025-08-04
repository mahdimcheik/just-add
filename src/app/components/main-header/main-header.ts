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
import { MainService } from '../../services/mainService';
import { NavigationService } from '../../services/navigation-service';

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
  mainService = inject(MainService);
  navigationService = inject(NavigationService);

  mainItems = this.navigationService.mainItems;
  authItems = this.navigationService.authItems;

  toggleMenu(event: Event) {
    this.menu.toggle(event);
  }
}
