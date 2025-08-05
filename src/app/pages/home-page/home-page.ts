import { Component, inject } from '@angular/core';
import { AuthMainService } from '../../services/auth-main-service';

@Component({
  selector: 'home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  authService = inject(AuthMainService);
  user = this.authService.user;
}
