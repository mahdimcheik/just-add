import { inject, Injectable, signal } from '@angular/core';
import { AuthService, UserResponseDto } from '../api';

@Injectable({
  providedIn: 'root',
})
export class AuthMainService {
  private AuthService = inject(AuthService);
  user = signal<UserResponseDto | null>(null);

  login(email: string, password: string) {
    return this.AuthService.postAuthLogin({
      email,
      password,
    });
  }
}
