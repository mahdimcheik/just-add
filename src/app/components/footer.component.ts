import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <div
      style="background: #2c3e50; color: white; padding: 1.5rem 0; margin-top: auto;"
    >
      <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <div
          style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;"
        >
          <div style="flex: 1; text-align: left;">
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">
              © 2024 My Jokes App. All rights reserved.
            </p>
          </div>
          <div style="flex: 1; text-align: center;">
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">
              Built with ❤️ using Angular & PrimeNG
            </p>
          </div>
          <div style="flex: 1; text-align: right;">
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">
              Version 1.0.0
            </p>
          </div>
        </div>
        <div
          style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);"
        >
          <p style="margin: 0; font-size: 0.8rem; opacity: 0.6;">
            Made for sharing laughter and joy
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterComponent {}
