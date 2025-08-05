import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthMainService } from '../../services/auth-main-service';
import { firstValueFrom } from 'rxjs';

export const getUserProfileResolver: ResolveFn<boolean> = async (
  route,
  state
) => {
  const authService = inject(AuthMainService);
  if (authService.user()?.email) {
    return true;
  } else {
    if (!authService.token() && !localStorage.getItem('token')) {
      return true;
    }
    try {
      await firstValueFrom(authService.loginWithToken());
      return true;
    } catch {
      return false;
    }
  }
};
