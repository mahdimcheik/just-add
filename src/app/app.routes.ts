import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { HomePage } from './pages/home-page/home-page';
import {
  checkConnectionGuard,
  isNotConnectedGuard,
} from './utilities/guards/check-credential-guard-guard';
import { ProfilePage } from './pages/profile-page/profile-page';
import { getUserProfileResolver } from './utilities/resolvers/get-user-profile-resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      user: getUserProfileResolver,
    },
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [isNotConnectedGuard],
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [checkConnectionGuard],
  },
];
