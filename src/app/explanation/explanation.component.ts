import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../shared/ui/dummy';

@Component({
  selector: 'app-explanation',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './explanation.component.html',
  styleUrl: './explanation.component.sass'
})
export class ExplanationComponent {

}
