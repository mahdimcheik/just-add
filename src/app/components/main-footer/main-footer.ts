import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'main-footer',
  imports: [RouterModule, ButtonModule],
  templateUrl: './main-footer.html',
})
export class MainFooter {
  router = inject(Router);
}
