import {
  computed,
  inject,
  Injectable,
  linkedSignal,
  signal,
} from '@angular/core';
import { AuthService, RegisterDto, UserResponseDto } from '../api';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthMainService {
  private AuthService = inject(AuthService);
  user = signal<UserResponseDto | null>(null);
  token = linkedSignal(() => this.user()?.token || null);
  isConnected = computed(() => !!this.user() && !!this.user()?.email);

  login(email: string, password: string) {
    return this.AuthService.postAuthLogin({
      email,
      password,
    }).pipe(
      tap((response) => {
        this.user.set(response.data || null);
        this.saveUser(this.user() ?? {});
      })
    );
  }

  loginWithToken() {
    return this.AuthService.getAuthMe().pipe(
      tap((response) => {
        if (response.data) {
          this.user.set({ ...response.data, token: this.token() });
          this.saveUser(response.data);
        } else {
          this.user.set(null);
          this.removeUser();
        }
      })
    );
  }

  register(userRegister: RegisterDto) {
    return this.AuthService.postAuthRegister(userRegister).pipe(
      tap((response) => {
        this.user.set(response.data || null);
      })
    );
  }

  logout() {
    this.user.set(null);
    this.removeUser();
  }

  saveUser(user: UserResponseDto) {
    localStorage.setItem('user', JSON.stringify(user));
    if (user.token) {
      localStorage.setItem('token', user.token);
    }
  }

  removeUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
