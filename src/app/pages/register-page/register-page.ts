import { Component, inject } from '@angular/core';
import { ConfigurableForm } from '../../components/configurable-form/configurable-form';
import { Structure } from '../../components/configurable-form/inner-models';
import { Form, FormGroup } from '@angular/forms';
import { AuthMainService } from '../../services/auth-main-service';
import { first, firstValueFrom } from 'rxjs';

@Component({
  selector: 'register-page',
  imports: [ConfigurableForm],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  authMainService = inject(AuthMainService);

  mainStructure: Structure = {
    id: 'register',
    name: 'register',
    label: 'Inscription',
    description: 'Veuillez remplir le formulaire pour vous inscrire.',

    formFieldGroups: [
      {
        id: 'userDetails',
        name: 'userDetails',
        label: 'Détails de l’utilisateur',
        columnSpan: 4,
        fields: [
          {
            id: 'firstName',
            name: 'firstName',
            label: 'Prénom',
            type: 'text',
            required: true,
            columnSpan: 2,
          },
          {
            id: 'lastName',
            name: 'lastName',
            label: 'Nom',
            type: 'text',
            required: true,
            columnSpan: 2,
          },
          {
            id: 'email',
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            columnSpan: 4,
          },
          {
            id: 'password',
            name: 'password',
            label: 'Mot de passe',
            type: 'password',
            required: true,
            columnSpan: 2,
          },
          {
            id: 'confirmPassword',
            name: 'confirmPassword',
            label: 'Confirmer le mot de passe',
            type: 'password',
            required: true,
            columnSpan: 2,
          },
        ],
      },
    ],
  };

  async handleFormSubmit(event: FormGroup) {
    try {
      await firstValueFrom(
        this.authMainService.register(event.value.userDetails)
      );
    } catch (error) {
      console.error('Error during registration:', error);
      return;
    }
  }
}
