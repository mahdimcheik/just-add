import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigurableForm } from '../../components/configurable-form/configurable-form';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Structure } from '../../components/configurable-form/inner-models';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthMainService } from '../../services/auth-main-service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [
    ConfigurableForm,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    RouterLink,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  authMainService = inject(AuthMainService);
  route = inject(Router);

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
        columnSpan: 2,
      },
      {
        id: 'password',
        name: 'password',
        label: 'Mot de passe',
        type: 'password',
        validation: [Validators.required],
        columnSpan: 2,
      },
    ],
    globalValidators: [Validators.required],
  };

  cancel() {}

  async login(event: FormGroup) {
    try {
      await firstValueFrom(
        this.authMainService.login(event.value.email, event.value.password)
      );
      this.route.navigate(['/']);
    } catch {}
  }
}
