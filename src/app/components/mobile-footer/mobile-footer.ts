import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainService } from '../../services/mainService';
import { NavigationService } from '../../services/navigation-service';

@Component({
  selector: 'mobile-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './mobile-footer.html',
  standalone: true,
})
export class MobileFooter {
  private router = inject(Router);
  mainService = inject(MainService);
  navigationService = inject(NavigationService);
  isMobileScreen = this.mainService.isMobileScreen;

  mainItems = this.navigationService.mainItems;
  authItems = this.navigationService.authItems;

  showMoreOptions = false;

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.showMoreOptions = false; // Close more options when navigating
  }

  toggleMoreOptions(): void {
    this.showMoreOptions = !this.showMoreOptions;
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
