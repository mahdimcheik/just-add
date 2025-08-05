import { Component, inject } from '@angular/core';
import { AuthMainService } from '../../services/auth-main-service';

@Component({
  selector: 'profile-page',
  imports: [],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  authMainService = inject(AuthMainService);
  user = this.authMainService.user;
}
