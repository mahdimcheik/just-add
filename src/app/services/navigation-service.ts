import { computed, inject, Injectable, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthMainService } from './auth-main-service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  authMainService = inject(AuthMainService);
  router = inject(Router);
  // links
  mainItems: Signal<MenuItem[]> = computed(() => [
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
  ]);

  authItems: Signal<MenuItem[]> = computed(() =>
    this.authMainService.isConnected()
      ? [
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
              this.router.navigate(['/']);
            },
          },
        ]
      : [
          {
            label: 'Connexion',
            icon: 'pi pi-sign-in',
            routerLink: '/auth/login',
            command: () => {
              this.router.navigate(['/auth/login']);
            },
          },
        ]
  );

  goToProfile() {
    this.router.navigate(['/profile/me']);
  }

  logout() {
    this.authMainService.logout();
    this.router.navigate(['/auth/login']);
  }
}
