import { Component, inject, computed } from '@angular/core';
import { AuthMainService } from '../../services/auth-main-service';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-page',
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    ChipModule,
    DividerModule,
    ButtonModule,
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  authMainService = inject(AuthMainService);
  user = this.authMainService.user;

  // Computed properties for better display
  userDisplayName = computed(() => {
    const currentUser = this.user();
    if (currentUser?.fullName) {
      return currentUser.fullName;
    }
    if (currentUser?.firstName || currentUser?.lastName) {
      return `${currentUser?.firstName || ''} ${
        currentUser?.lastName || ''
      }`.trim();
    }
    return currentUser?.email?.split('@')[0] || 'User';
  });

  userInitials = computed(() => {
    const currentUser = this.user();
    if (currentUser?.firstName && currentUser?.lastName) {
      return `${currentUser.firstName.charAt(0)}${currentUser.lastName.charAt(
        0
      )}`.toUpperCase();
    }
    if (currentUser?.fullName) {
      const names = currentUser.fullName.split(' ');
      return names.length > 1
        ? `${names[0].charAt(0)}${names[names.length - 1].charAt(
            0
          )}`.toUpperCase()
        : names[0].charAt(0).toUpperCase();
    }
    return currentUser?.email?.charAt(0).toUpperCase() || 'U';
  });

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
