import { Component, inject, computed } from '@angular/core';
import { AuthMainService } from '../../services/auth-main-service';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from '../../utilities/pipes/initials-pipe';

@Component({
  selector: 'profile-page',
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    ChipModule,
    DividerModule,
    ButtonModule,
    InitialsPipe,
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  authMainService = inject(AuthMainService);
  user = this.authMainService.user;

  formattedCreatedDate = computed(() => {
    const currentUser = this.user();
    if (currentUser?.createdAt) {
      return new Date(currentUser.createdAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return 'Non disponible';
  });

  formattedUpdatedDate = computed(() => {
    const currentUser = this.user();
    if (currentUser?.updatedAt) {
      return new Date(currentUser.updatedAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return 'Non disponible';
  });

  onEditProfile() {
    // TODO: Implement edit profile functionality
    console.log('Edit profile clicked');
  }

  onLogout() {
    this.authMainService.logout();
  }
}
