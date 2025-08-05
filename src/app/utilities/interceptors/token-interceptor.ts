import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthMainService } from '../../services/auth-main-service';
import { UserResponseDto } from '../../api';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthMainService);
  let token = authService.token();

  // If no token from service, try to get it from localStorage
  if (!token) {
    try {
      token = localStorage.getItem('token');
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
    }
  }

  // Clone the request and add authorization header if token exists
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  // If no token, proceed with original request
  return next(req);
};
