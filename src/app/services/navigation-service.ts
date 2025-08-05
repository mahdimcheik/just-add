import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  router = inject(Router);
  // links
  mainItems: MenuItem[] = [
    {
      label: 'Accueil',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'Tableau de bord',
      icon: 'pi pi-chart-line',
      routerLink: '/dashboard',
    },
    {
      label: 'Qui je suis',
      icon: 'pi pi-user',
      routerLink: '/profile',
      fragment: 'profile',
    },
  ];

  authItems: MenuItem[] = [
    {
      label: 'Profil',
      icon: 'pi pi-user',
      command: () => {
        this.goToProfile();
      },
    },
    {
      label: 'Déconnexion',
      icon: 'pi pi-sign-out',
      command: () => {
        this.logout();
      },
    },
  ];

  goToProfile() {
    this.router.navigate(['/profile/me']);
  }

  logout() {
    // this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
