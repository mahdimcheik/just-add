import { Component } from '@angular/core';
import { ConfigurableForm } from '../../components/configurable-form/configurable-form';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Structure } from '../../components/configurable-form/inner-models';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'login-page',
  imports: [
    ConfigurableForm,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  structure: Structure = {
    id: 'login',
    name: 'login',
    label: 'Connexion',
    formFields: [
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'text',
      },
      {
        id: 'password',
        name: 'password',
        label: 'Mot de passe',
        type: 'password',
      },
    ],
    globalValidators: [Validators.required],
  };
}
