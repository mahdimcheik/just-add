import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainHeader } from './components/main-header/main-header';
import { MainFooter } from './components/main-footer/main-footer';

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
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
