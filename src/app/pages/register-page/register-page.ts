import { Component } from '@angular/core';
import { ConfigurableForm } from '../../components/configurable-form/configurable-form';
import { Structure } from '../../components/configurable-form/inner-models';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'register-page',
  imports: [ConfigurableForm],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
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
            id: 'username',
            name: 'username',
            label: 'Utilisateur',
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
            columnSpan: 2,
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

  handleFormSubmit(event: FormGroup) {
    // Handle form submission logic here
    console.log('Form submitted:', event);
    // You can call a service to register the user with the provided data
  }
}
