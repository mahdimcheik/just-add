import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthMainService } from '../../services/auth-main-service';

export const checkConnectionGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthMainService);
  if (authService.user()?.email) {
    return true;
  } else {
    try {
      await firstValueFrom(authService.loginWithToken());
      return true;
    } catch {
      return false;
    }
  }
};

export const isNotConnectedGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthMainService);
  if (!authService.user()?.email) {
    return true;
  } else {
    try {
      await firstValueFrom(authService.loginWithToken());
      return false;
    } catch {
      return true;
    }
  }
};
