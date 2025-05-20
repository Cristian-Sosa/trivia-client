import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../shared/ui/dummy';
import { InputComponent } from '../shared';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-explanation',
  imports: [
    ButtonComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './explanation.component.html',
  styleUrl: './explanation.component.sass',
})
export class ExplanationComponent {
  private formBuilder = inject(FormBuilder);

  public explanationForm: FormGroup = this.formBuilder.group({
    phoneNumberToValidate: ['', Validators.required],
  });

  validatePhoneNumber = ($event?: Event) => {
    if ($event) {
      $event.preventDefault();
    }

    console.log(this.explanationForm.get('phoneNumberToValidate')?.value)
  }
}
