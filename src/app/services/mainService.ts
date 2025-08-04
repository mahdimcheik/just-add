import { computed, Injectable, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  isMobileScreen = signal(false);
  isDesktopScreen = computed(() => !this.isMobileScreen());
}
