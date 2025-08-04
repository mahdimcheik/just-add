import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MenubarModule],
  template: `
    <div
      style="background: red; padding: 1rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
    >
      <div
        style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: center; align-items: center;"
      >
        <p-menubar [model]="menuItems">
          <ng-template pTemplate="start">
            <div
              style="color: white; font-size: 1.5rem; font-weight: bold; margin-right: 2rem;"
            >
              My Jokes App
            </div>
          </ng-template>
        </p-menubar>
      </div>
    </div>
  `,
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'My Jokes',
      icon: 'pi pi-heart',
      routerLink: '/my-jokes',
    },
    {
      label: 'Find Jokes',
      icon: 'pi pi-search',
      routerLink: '/find-jokes',
    },
    {
      label: 'Connections',
      icon: 'pi pi-users',
      routerLink: '/connections',
    },
  ];
}
