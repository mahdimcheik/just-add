import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainHeader } from './components/main-header/main-header';
import { MainFooter } from './components/main-footer/main-footer';
import { MobileFooter } from './components/mobile-footer/mobile-footer';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MainService } from './services/mainService';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    MainHeader,
    MainFooter,
    MobileFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  breakPointObserver = inject(BreakpointObserver);
  mainService = inject(MainService);
  isMobileScreen = this.mainService.isMobileScreen;

  ngOnInit(): void {
    this.breakPointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.mainService.isMobileScreen.set(result.matches);
      });
  }
}
