import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/ui/dummy';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
