import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { HomePage } from './pages/home-page/home-page';
import {
  checkConnectionGuard,
  isNotConnectedGuard,
} from './utilities/guards/check-credential-guard-guard';
import { ProfilePage } from './pages/profile-page/profile-page';
import { getUserProfileResolver } from './utilities/resolvers/get-user-profile-resolver';
import { AuthLayout } from './components/auth-layout/auth-layout';
import { RegisterPage } from './pages/register-page/register-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      user: getUserProfileResolver,
    },
  },
  {
    path: 'auth',
    component: AuthLayout,
    canActivate: [isNotConnectedGuard],
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: 'register',
        component: RegisterPage,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [checkConnectionGuard],
  },
];
