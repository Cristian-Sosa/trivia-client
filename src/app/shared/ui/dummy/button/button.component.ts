import { Component, Input } from '@angular/core';
import { IButton } from '../../../interfaces/ibutton';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() button!: IButton;
}
